import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  passages: [],
};

const passageSlice = createSlice({
  name: 'passages',
  initialState,
  reducers: {
    addPassage: (state, action) => {
      state.passages.push(action.payload);
    },
  },
});


export const { addPassage } = passageSlice.actions;

export default passageSlice.reducer;