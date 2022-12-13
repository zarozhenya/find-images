import React from 'react';
import {Image, Text, View} from 'react-native';
import Logo from '../../assets/svg/arrow.svg';
import {styles} from './styles';

export const ListItem = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemData}>
        <Image source={{uri: item.largeImageURL}} style={styles.image} />
        <View>
          <Text>Likes: {item.likes}</Text>
          <Text>Comments: {item.comments}</Text>
          <Text>Downloads: {item.downloads}</Text>
        </View>
      </View>
      <Logo fill="#303030" width={24} height={24} />
    </View>
  );
};
