import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';
import LinearGragient from 'react-native-linear-gradient';

export const TagItem = ({item, index}) => {
  return (
    <LinearGragient
      locations={[0, 0.51, 1]}
      colors={['#2b5876', '#4e4376', '#2b5876']}
      start={{x: 0, y: 0}}
      style={[styles.tagItem, index !== 0 && {marginLeft: 8}]}>
      <Text style={[styles.text, styles.tagText]}>{item}</Text>
    </LinearGragient>
  );
};
