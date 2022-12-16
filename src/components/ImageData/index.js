import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity, useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import {selectItems} from '../../redux/imagesSlice';
import {ProgressiveImage} from '../ProgressiveImage';
import {styles} from './styles';
import {TagItem} from './TagItem';
export const ImageData = () => {
  const scheme = useColorScheme();
  const navigation = useNavigation();
  const {
    params: {itemId},
  } = useRoute();
  const items = useSelector(selectItems);
  const currentItem = items.find(({id}) => id === itemId);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Web', {url: currentItem.pageURL});
      }}
      style={[styles.wrapper, styles[scheme + 'Wrapper']]}>
      <ProgressiveImage url={currentItem.largeImageURL} style={styles.image} />
      <View style={[styles.dataContainer, styles[scheme + 'DataContainer']]}>
        <View style={[styles.container, styles[scheme + 'ContainerBorder']]}>
          <Text style={[styles.text, styles[scheme + 'Text']]}>Tags:</Text>
          <View style={styles.list}>
            {currentItem.tags.split(', ').map((item, index) => (
              <TagItem item={item} key={index} index={index} />
            ))}
          </View>
        </View>
        <View style={[styles.container, styles[scheme + 'ContainerBorder']]}>
          <Text style={[styles.text, styles[scheme + 'Text']]}>Likes:</Text>
          <TagItem item={currentItem.likes} />
        </View>
        <View style={[styles.container, styles[scheme + 'ContainerBorder']]}>
          <Text style={[styles.text, styles[scheme + 'Text']]}>Comments:</Text>
          <TagItem item={currentItem.comments} />
        </View>
        <View style={[styles.container]}>
          <Text style={[styles.text, styles[scheme + 'Text']]}>Downloads:</Text>
          <TagItem item={currentItem.downloads} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
