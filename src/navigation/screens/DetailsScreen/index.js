import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {AuthorData} from '../../../components/AuthorData';
import {ImageData} from '../../../components/ImageData';
import {styles} from './styles';

export const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <ImageData />
        <AuthorData />
      </View>
    </SafeAreaView>
  );
};
