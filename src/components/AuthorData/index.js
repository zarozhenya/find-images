import React from 'react';
import {Image, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectItems} from '../../redux/imagesSlice';
import {styles} from './styles';
import Arrow from '../../assets/svg/arrow.svg';

export const AuthorData = () => {
  const {
    params: {itemId},
  } = useRoute();
  const items = useSelector(selectItems);
  const {userImageURL, user} = items.find(({id}) => id === itemId);
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={{uri: userImageURL}} style={styles.image} />
        <Text style={styles.text}>{user}</Text>
      </View>
      <Arrow fill="#303030" width={24} height={24} />
    </View>
  );
};
