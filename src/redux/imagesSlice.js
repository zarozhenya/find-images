import {createSlice} from '@reduxjs/toolkit';
import {fetchImages} from './operations';

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    query: '',
    page: 1,
    items: [],
  },
  reducers: {
    increment: state => {
      state.page = state.page + 1;
    },
    decrement: state => {
      state.page -= 1;
    },
    setQuery: (state, {payload}) => {
      state.query = payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(fetchImages.fulfilled, (state, {payload}) => {
      state.items = payload;
    }),
});

export const {increment, decrement, setQuery} = imagesSlice.actions;

export const imagesReducer = imagesSlice.reducer;

export const selectQuery = state => state.images.query;

export const selectPage = state => state.images.page;

export const selectItems = state => state.images.items;
