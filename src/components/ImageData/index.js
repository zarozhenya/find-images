import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {useSelector} from 'react-redux';
import {selectItems} from '../../redux/imagesSlice';
import {styles} from './styles';
import {TagItem} from './TagItem';

export const ImageData = () => {
  const {
    params: {itemId},
  } = useRoute();
  const items = useSelector(selectItems);
  const currentItem = items.find(({id}) => id === itemId);
  return (
    <TouchableOpacity
      onPress={() =>
        Alert.alert('Do you want to go to the image page?', undefined, [
          {text: 'No', style: 'destructive'},
          {
            text: 'Yes',
            style: 'default',
            onPress: () => Linking.openURL(currentItem.pageURL),
          },
        ])
      }
      style={styles.wrapper}>
      <Image source={{uri: currentItem.largeImageURL}} style={styles.image} />
      <View style={styles.dataContainer}>
        <View style={[styles.container, styles.containerBorder]}>
          <Text style={styles.text}>Tags:</Text>
          <View style={styles.list}>
            {currentItem.tags.split(', ').map((item, index) => (
              <TagItem item={item} key={index} index={index} />
            ))}
          </View>
        </View>
        <View style={[styles.container, styles.containerBorder]}>
          <Text style={styles.text}>Likes:</Text>
          <TagItem item={currentItem.likes} />
        </View>
        <View style={[styles.container, styles.containerBorder]}>
          <Text style={styles.text}>Comments:</Text>
          <TagItem item={currentItem.comments} />
        </View>
        <View style={[styles.container]}>
          <Text style={styles.text}>Downloads:</Text>
          <TagItem item={currentItem.downloads} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
