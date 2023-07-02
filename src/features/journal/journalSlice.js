import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: []
};

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.entries.push(action.payload);
    }
  }
});

export const { addEntry } = journalSlice.actions;
export const journalReducer = journalSlice.reducer;
