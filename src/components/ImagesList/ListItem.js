import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import Logo from '../../assets/svg/arrow.svg';
import {selectItems} from '../../redux/imagesSlice';
import {styles} from './styles';

export const ListItem = ({item, index}) => {
  const {length} = useSelector(selectItems);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={
        index !== length - 1 ? [styles.item, {marginBottom: 8}] : styles.item
      }
      onPress={() => navigation.navigate('Details')}>
      <View style={styles.itemData}>
        <Image source={{uri: item.largeImageURL}} style={styles.image} />
        <View>
          <Text style={styles.itemText}>Likes: {item.likes}</Text>
          <Text style={styles.itemText}>Comments: {item.comments}</Text>
          <Text style={styles.itemText}>Downloads: {item.downloads}</Text>
        </View>
      </View>
      <Logo fill="#303030" width={24} height={24} />
    </TouchableOpacity>
  );
};
