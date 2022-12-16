import React from 'react';
import {Text, useColorScheme} from 'react-native';
import {styles} from './styles';

export const EmptyComponent = () => {
  const scheme = useColorScheme();
  return (
    <Text style={[styles.text, styles[scheme + 'Text']]}>List is empty.</Text>
  );
};
