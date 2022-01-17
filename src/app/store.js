import { configureStore } from '@reduxjs/toolkit';
import notesReducers from '@store/notes/notesSlice';
import usersReducers from '@store/users/usersSlice';
import categoriesReducer from '@store/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducers,
    users: usersReducers,
    categories: categoriesReducer,
  },
});
