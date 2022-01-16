import { configureStore } from '@reduxjs/toolkit';
import usersReducers from '@store/users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducers,
  },
});
