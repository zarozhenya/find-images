import React from 'react';
import {Text, useColorScheme} from 'react-native';
import {styles} from './styles';
import LinearGragient from 'react-native-linear-gradient';

export const TagItem = ({item, index}) => {
  const scheme = useColorScheme();
  return (
    <LinearGragient
      locations={[0, 0.51, 1]}
      colors={
        scheme === 'dark'
          ? ['#2b5876', '#4e4376', '#2b5876']
          : ['#ECE9E6', '#FFFFFF', '#ECE9E6']
      }
      start={{x: 0, y: 0}}
      style={[styles.tagItem, index !== 0 && {marginLeft: 8}]}>
      <Text style={[styles.text, styles.tagText, styles[scheme + 'Text']]}>
        {item}
      </Text>
    </LinearGragient>
  );
};
