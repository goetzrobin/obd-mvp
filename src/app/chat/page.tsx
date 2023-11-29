'use client';

import MessageContainer from '@/app/chat/messages/message-container';
import UserInput from '@/app/chat/user-input';
import {
    ReadyState,
    useMessageSocketActions,
    useMessageSocketReadyState,
} from '@/lib/messages/message-socket.store';
import {
    useMessageHistoryActions,
    useMessagesForKey,
} from '@/lib/messages/message-history.store';
import {useNextMessageLoading, useNextMessageLoadingActions} from '@/lib/messages/next-message-loading.store';
import {useEffect} from "react";
import {Message} from "@/lib/messages/message";
import {useCurrentUser} from "@/lib/user/user.store";

const CHANNEL = 'channel1';
const Page = () => {
    const {initSocket, registerOnMessageCallback, sendMessage} = useMessageSocketActions();
    const readyState = useMessageSocketReadyState();

    const messages = useMessagesForKey(CHANNEL);
    const {addMessage} = useMessageHistoryActions()

    const {setLoading} = useNextMessageLoadingActions()
    const isThinking = useNextMessageLoading();

    const currentUser = useCurrentUser();

    useEffect(() => registerOnMessageCallback((message: Message) => {
        setLoading(false);
        addMessage(CHANNEL, message);
    }), [registerOnMessageCallback, setLoading, addMessage]);

    useEffect(() => {
        initSocket();
    }, [initSocket]);

    const sendUserMessageAndAddToHistory = (message: string) => {
        if (!currentUser) return;
        setLoading(true)
        sendMessage(currentUser?.name, message);
    };

    console.log(messages)

    return (<div className='max-w-screen-xl mx-auto p-4'>
            <MessageContainer isThinking={isThinking} readyState={readyState} messages={messages}/>
            <UserInput enabled={readyState === ReadyState.OPEN} onSend={sendUserMessageAndAddToHistory}/>
        </div>
    );
};

export default Page;
