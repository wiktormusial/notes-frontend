import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import getToken from '@utils/Auth/getToken'

export const fetchNotes = createAsyncThunk(
  'notes/fetchNotes',
  async() => {
    const token = getToken()
    if (token !== undefined) {
      const response = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}notes`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        }
      })
      return response.data
    }
  }
)

const initialState = {
  status: 'idle',
  error: null,
  notes: []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.notes = action.payload
      })
      .addCase(fetchNotes.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const getNotesStatus = (state) => state.notes.status
export default notesSlice.reducer;
