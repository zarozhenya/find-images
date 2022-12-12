import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Input} from '../../../components/Input';
import {selectPage, selectQuery} from '../../../redux/imagesSlice';
import {increment} from '../../../redux/imagesSlice';
import {styles} from './styles';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const query = useSelector(selectQuery);
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Input />
        <Text
          onPress={() => {
            dispatch(increment());
          }}>
          Page: {page}
        </Text>
        <Text>Query: {query}</Text>
      </View>
    </SafeAreaView>
  );
};
