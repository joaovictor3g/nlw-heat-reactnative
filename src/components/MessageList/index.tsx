import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import {
  ScrollView
} from 'react-native';
import { MESSAGES_EXAMPLE } from '../../../utils/messages';
import { Message as MessageProps } from '../../@types';
import { api } from '../../services/api';

import { Message } from '../Message';

import { styles } from './styles';

const messagesQueue: MessageProps[] = MESSAGES_EXAMPLE;

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage: MessageProps) => {
  messagesQueue.push(newMessage);
});

export function MessageList(){
  const [messages, setMessages] = useState<MessageProps[]>([])

  useEffect(() => {
    api.get<MessageProps[]>(`/messages/last3`)
      .then(res => setMessages(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if(messagesQueue.length > 0) {
        setMessages(prev => [
          messagesQueue[0],
          prev[0],
          prev[1]
        ].filter(Boolean));
      }
      messagesQueue.shift();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {messages.map((message, i) => (
        <Message key={`${message.id}+${i}`} data={message}/>
      ))}
    
    </ScrollView>
  );
}