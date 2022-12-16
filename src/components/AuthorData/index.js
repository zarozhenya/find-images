import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectItems} from '../../redux/imagesSlice';
import {styles} from './styles';
import Arrow from '../../assets/svg/arrow.svg';
import {ProgressiveImage} from '../ProgressiveImage';
import {Images} from '../../assets/images';

export const AuthorData = () => {
  const {
    params: {itemId},
  } = useRoute();
  const items = useSelector(selectItems);
  const {userImageURL, user} = items.find(({id}) => id === itemId);
  return (
    <View style={styles.container}>
      <ProgressiveImage
        url={userImageURL}
        style={styles.image}
        placeholder={Images.userImage}
      />
      <Text style={styles.text}>{user}</Text>
    </View>
  );
};
