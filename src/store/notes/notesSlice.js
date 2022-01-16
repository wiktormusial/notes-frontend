import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import getToken from '@utils/Auth/getToken'

const initialState = {
  status: 'idle',
  error: null,
  notes: []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {

  }
})

export default notesSlice.reducer;
