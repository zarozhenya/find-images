import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectPage, selectQuery} from '../../../redux/imagesSlice';
import {increment} from '../../../redux/imagesSlice';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const query = useSelector(selectQuery);
  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          dispatch(increment());
        }}>
        Page: {page}
      </Text>
      <Text>Query: {query}</Text>
    </SafeAreaView>
  );
};
