import React from 'react';
import {SafeAreaView, useColorScheme, View} from 'react-native';
import {AuthorData} from '../../../components/AuthorData';
import {ImageData} from '../../../components/ImageData';
import {styles} from './styles';

export const DetailsScreen = () => {
  const scheme = useColorScheme();
  return (
    <View style={[styles.background, styles[scheme + 'Background']]}>
      <SafeAreaView style={styles.flex}>
        <View style={styles.container}>
          <ImageData />
          <AuthorData />
        </View>
      </SafeAreaView>
    </View>
  );
};
