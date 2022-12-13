import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectItems} from '../../../redux/imagesSlice';
import {styles} from './styles';

export const DetailsScreen = () => {
  const {
    params: {itemId},
  } = useRoute();
  const items = useSelector(selectItems);
  const currentItem = items.find(({id}) => id === itemId);
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Text>{itemId}</Text>
        <Image
          source={{uri: currentItem.largeImageURL}}
          style={{width: '100%', aspectRatio: 1 / 1}}
        />
      </View>
    </SafeAreaView>
  );
};
