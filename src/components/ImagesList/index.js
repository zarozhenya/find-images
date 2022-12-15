import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectItems} from '../../redux/imagesSlice';
import {fetchImages} from '../../redux/operations';
import {EmptyComponent} from './EmptyComponent';
import {ListItem} from './ListItem';

export const ImagesList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);
  return (
    <FlatList
      data={items}
      ListEmptyComponent={EmptyComponent}
      renderItem={({item, index}) => <ListItem item={item} index={index} />}
      onEndReached={() => dispatch(fetchImages())}
    />
  );
};
