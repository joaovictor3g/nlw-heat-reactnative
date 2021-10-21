import React from 'react';

import {
  View
} from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../theme';
import { Button } from '../Button';


import { styles } from './styles';

export function SignInBox(){
  const { signIn, isSigning } = useAuth();

  return (
    <View style={styles.container}>
      <Button 
        title="ENTRAR COM GITHUB"
        color={COLORS.BLACK_PRIMARY}
        background={COLORS.YELLOW}
        icon={`github`}
        isLoading={isSigning}
        onPress={signIn}
      />
    </View>
  );
}