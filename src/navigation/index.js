import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainStack} from './stack';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
