import {create} from 'zustand';
import {combine} from 'zustand/middleware';
import {Message} from './message';
import Ably from "ably/promises";

export const enum ReadyState {
    CONNECTING,
    OPEN,
    CLOSING,
    CLOSED,
}

const CHANNEL = 'channel1';

const setUpWebsocket = (
    onMessageCallback: (message: Message) => void,
    onOpenCallback: (readyState: ReadyState) => void,
    onCloseCallback: (readyState: ReadyState) => void,
): Ably.Realtime => {

    const realtime = new Ably.Realtime({key: 'YRQFKw.ozCmMQ:OG0Gc8V9UVofayAdX1hpZ7D5nYXTtSRJquKAzcA7qfg'});

    // Connection opened
    realtime.connection.on('connected', () => {
        console.log('connected')
        onOpenCallback(ReadyState.OPEN);
    });

    // Connection closed
    realtime.connection.on('closed', (event) => {
        console.log('closed')
        onCloseCallback(ReadyState.CLOSED);
    });

    const channel1 = realtime.channels.get(CHANNEL, {
        params: {rewind: '7'}
    })
    // Listen for messages
    void channel1.subscribe((event) => {
        onMessageCallback(event);
    });

    return realtime;
};

const useMessageSocketStore = create(combine({
        socket: null as Ably.Realtime | null,
        agentParam: null as string | null,
        readyState: ReadyState.CONNECTING as ReadyState,
        onMessageCallback: ((message: Message) => console.warn('No message callback set up. Simply logging message', message)) as (message: Message) => void,
    }, (set, get) => ({
        actions: {
            initSocket: () => set(state => {
                if (state.socket) return state;
                const updateReadyState = (readyState: ReadyState) => set(state => ({...state, readyState}));
                return {
                    ...state,
                    agentParam: '',
                    socket: setUpWebsocket(
                        state.onMessageCallback,
                        updateReadyState,
                        updateReadyState),
                };
            }),
            sendMessage: (currentUserName: string, message: string) => {
                get()?.socket?.channels?.get(CHANNEL).publish(currentUserName, JSON.stringify({message}))
            },
            resetSocket: () => set(state => {
                state?.socket?.close();
                return {...state, socket: null};
            }),
            registerOnMessageCallback: (cb: (message: Message) => void) => set(state => ({
                ...state,
                onMessageCallback: cb
            })),
        },
    }),
));

export const useMessageSocketReadyState = () => useMessageSocketStore(s => s.readyState);
export const useMessageSocketActions = () =>
    useMessageSocketStore((s) => s.actions);
