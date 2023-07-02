import { userReducer } from '../features/user/userSlice';
import { journalReducer } from '../features/journal/journalSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
    journal: journalReducer
  }
});
