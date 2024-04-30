import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

export const selectNameFilter = state => state.filters.name;
