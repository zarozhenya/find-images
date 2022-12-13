import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ImagesList} from '../../../components/ImagesList';
import {Input} from '../../../components/Input';
import {styles} from './styles';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Input style={[{marginBottom: 16}]} />
        <ImagesList />
      </View>
    </SafeAreaView>
  );
};
