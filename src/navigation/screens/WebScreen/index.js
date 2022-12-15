import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';
import {styles} from './styles';

export const WebScreen = () => {
  const {
    params: {url},
  } = useRoute();
  return (
    <SafeAreaView style={styles.flex}>
      <WebView source={{uri: url || 'https://google.com'}} />
    </SafeAreaView>
  );
};
