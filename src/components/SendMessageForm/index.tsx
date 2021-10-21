import React, { useState } from 'react';

import {
  View,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if(message.length > 0) {
      setSendingMessage(prev => !prev);
      await api.post(`/messages`, { message: messageFormatted });
      setMessage('');
      Keyboard.dismiss();
      setSendingMessage(prev => !prev);
      Alert.alert('Mesnagem enviada com sucesso!');
    } else {
      Alert.alert(`Escreva a mensagem para enviar.`)
    }
  }

  return (  
    <View style={styles.container}>
      <TextInput 
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        editable={!sendingMessage}
      />

      <Button 
        title="enviar mensagem"
        background={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </View>
  );
}