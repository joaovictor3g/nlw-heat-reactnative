import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';

import LogoSVG from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';
import { useAuth } from '../../hooks/useAuth';

export function Header(){
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <LogoSVG />

      <View style={styles.logOutButton}>
        { !!user && (
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logOutText}>Sair</Text>
          </TouchableOpacity>
        ) }
        <UserPhoto imageUri={user?.avatar_url} accessibilityLabel={user?.name}/>
      </View>
    </View>
  );
}