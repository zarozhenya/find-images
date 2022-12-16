import {createSlice} from '@reduxjs/toolkit';
import {fetchImages} from './operations';

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    query: '',
    page: 1,
    items: [],
    loading: false,
  },
  reducers: {
    setQuery: (state, {payload}) => {
      state.query = payload;
      state.items = [];
    },
  },
  extraReducers: builder =>
    builder.addCase(fetchImages.fulfilled, (state, {payload}) => {
      state.items.push(...payload);
      state.page += 1;
    }),
});

export const {increment, decrement, setQuery} = imagesSlice.actions;

export const imagesReducer = imagesSlice.reducer;

export const selectQuery = state => state.images.query;

export const selectPage = state => state.images.page;

export const selectItems = state => state.images.items;

export const selectLoading = state => state.images.items;
