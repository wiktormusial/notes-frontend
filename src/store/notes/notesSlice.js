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

export const addNewNote = createAsyncThunk(
  'notes/addNewNote',
  async(values) => {
    const token = getToken()
    if (token !== undefined) {
      const response = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}notes`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        },
        data: {
          title: values.title,
          body: values.body,
          category: values.category,
          author: 1,
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
    reloadState(state) {
      state.status = 'idle'
    }
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
    builder
      .addCase(addNewNote.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(addNewNote.fulfilled, (state, action) => {
        state.notes.push(action.payload)
      })
  },
})

export const { reloadState } = notesSlice.actions

export const getNotesStatus = (state) => state.notes.status
export const getNotes = (state) => state.notes.notes
export default notesSlice.reducer;
