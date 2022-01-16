import { configureStore } from '@reduxjs/toolkit';
import notesReducers from '@store/notes/notesSlice';
import usersReducers from '@store/users/usersSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducers,
    users: usersReducers,
  },
});
