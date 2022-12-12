import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {selectItems} from '../../redux/imagesSlice';
import {EmptyComponent} from './EmptyComponent';
import {ListItem} from './ListItem';

export const ImagesList = () => {
  const items = useSelector(selectItems);
  console.log(items[0]);
  return (
    <FlatList
      data={items}
      ListEmptyComponent={EmptyComponent}
      renderItem={({item}) => <ListItem item={item} />}
    />
  );
};
