import {Message} from '@/lib/messages/message';
import UserMessage from './user-message';
import MemgptMessage from './memgpt-message';
import React from 'react';
import {User} from "@/lib/user/user";

export const pickMessageElement = ({name, data, timestamp}: Message, key: number, currentUser?: User | null) => {
    const {message} = JSON.parse(data);
    if (name === currentUser?.name) {
        return <UserMessage key={key} date={new Date(timestamp)} message={message ?? ''}/>;
    }
    // if (type === 'agent_response_error') {
    //   return <ErrorMessage key={key} date={new Date()} message={message ?? ''} />;
    // }
    return <MemgptMessage key={key} date={new Date(timestamp)} message={message ?? ''}/>;
    // if (type === 'agent_response' && message_type === 'internal_monologue') {
    //   return <p key={key} className={cnMuted('mb-2 w-fit text-xs p-2 rounded border')}>{message}</p>;
    // }
};
