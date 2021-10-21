import React from 'react';

import {
  TouchableOpacity,
  Text,
  ColorValue,
  TouchableOpacityProps,
  ActivityIndicator
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  color: ColorValue,
  background: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading?: boolean;
};

export function Button({ title, color, background, icon, isLoading=false,...rest }: ButtonProps){
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: background }]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={color}/>
      ) : (
        <>
          <AntDesign name={icon} size={24} style={styles.icon}/>
          <Text style={[styles.title, { color }]}>
            {title}
          </Text>
        </>
      )}
    
    </TouchableOpacity>
  );
}