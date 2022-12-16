import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, useColorScheme, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useSelector} from 'react-redux';
import Logo from '../../assets/svg/arrow.svg';
import {selectItems} from '../../redux/imagesSlice';
import {ProgressiveImage} from '../ProgressiveImage';
import {styles} from './styles';

export const ListItem = ({item, index}) => {
  const {length} = useSelector(selectItems);
  const navigation = useNavigation();
  const scheme = useColorScheme();

  return (
    <TouchableOpacity
      style={[
        styles.item,
        styles[scheme + 'Item'],
        index !== length - 1 ? {marginBottom: 8} : null,
      ]}
      onPress={() => navigation.navigate('Details', {itemId: item.id})}>
      <View style={styles.itemData}>
        <ProgressiveImage url={item.largeImageURL} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={[styles.itemText, styles[scheme + 'ItemText']]}>
            Likes: {item.likes}
          </Text>
          <Text style={[styles.itemText, styles[scheme + 'ItemText']]}>
            Comments: {item.comments}
          </Text>
          <Text style={[styles.itemText, styles[scheme + 'ItemText']]}>
            Downloads: {item.downloads}
          </Text>
        </View>
      </View>
      <Logo
        fill={
          scheme === 'light'
            ? EStyleSheet.value('$primaryColor')
            : EStyleSheet.value('$primaryDarkColor')
        }
        width={24}
        height={24}
      />
    </TouchableOpacity>
  );
};
