import React from 'react';
import {TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {styles} from './styles';
import {setQuery} from '../../redux/imagesSlice';
import {useDebouncedCallback} from 'use-debounce';
import {fetchImages} from '../../redux/operations';

export const Input = ({style}) => {
  const dispatch = useDispatch();

  return (
    <View>
      <TextInput
        placeholder="Enter the query"
        placeholderTextColor="#D3D3D3"
        style={[styles.field, ...style]}
        onChangeText={useDebouncedCallback(text => {
          dispatch(setQuery(text));
          dispatch(fetchImages());
        }, 500)}
      />
    </View>
  );
};
