import React from 'react';
import {TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {styles} from './styles';
import {setQuery} from '../../redux/imagesSlice';

export const Input = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <TextInput
        placeholder="Enter the name"
        style={styles.field}
        onChangeText={text => {
          dispatch(setQuery(text));
        }}
      />
    </View>
  );
};
