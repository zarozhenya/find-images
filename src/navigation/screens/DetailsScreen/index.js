import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ImageData} from '../../../components/ImageData';
import {styles} from './styles';

export const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <ImageData />
      </View>
    </SafeAreaView>
  );
};
