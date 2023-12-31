'use client';
import React, { useEffect, useRef } from 'react';
import MessageContainerLayout from './message-container-layout';
import StatusIndicator from './status-indicator';
import ThinkingIndicator from './thinking-indicator';
import { Message } from '@/lib/messages/message';
import { ReadyState } from '@/lib/messages/message-socket.store';
import MessageContainerConnecting from './message-container-connecting';
import { pickMessageElement } from './message/pick-message-element';
import {useCurrentUser} from "@/lib/user/user.store";

const MessageContainer = ({ isThinking, messages, readyState }: {
  isThinking: boolean;
  messages: Message[];
  readyState: ReadyState
}) => {
  const currentUser = useCurrentUser();
  const messageBox = useRef<HTMLDivElement>(null);
  useEffect(() => messageBox.current?.scrollIntoView(false), [messages]);


  if (readyState === ReadyState.CONNECTING) {
    return <MessageContainerLayout>
      <StatusIndicator readyState={readyState} />
      <MessageContainerConnecting />
    </MessageContainerLayout>;
  }

  return <MessageContainerLayout><StatusIndicator readyState={readyState} />
    <div className='flex flex-col flex-1 px-4 py-6 space-y-4' ref={messageBox}>
      {messages.map((message, i) => pickMessageElement(message, i, currentUser))}
      {isThinking ? <ThinkingIndicator className='py-3 px-3 flex items-center' /> : undefined}
    </div>
  </MessageContainerLayout>;
};

export default MessageContainer;
