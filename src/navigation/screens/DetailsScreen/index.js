import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';

export const DetailsScreen = () => {
  const {
    params: {itemId},
  } = useRoute();
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Text>{itemId}</Text>
      </View>
    </SafeAreaView>
  );
};
