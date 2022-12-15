import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const params = new URLSearchParams({
      key: Config.API_KEY,
      q: state.images.query,
      image_type: 'photo',
    });
    const data = await fetch(`${Config.API_URL}?${params}`).then(res =>
      res.json(),
    );
    return data.hits;
  },
);
