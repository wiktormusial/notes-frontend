import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import getToken from '@utils/Auth/getToken'

export const getUserData = createAsyncThunk(
  'users/getUserData',
  async() => {
    const token = getToken()
    if (token !== undefined) {
      const response = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}users/getuserinfo/`,
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
  is_logged_in: false,
  error: null,
  data: {}
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userLoggedOut(state) {
      state.is_logged_in = false
      state.data = []
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.is_logged_in = true
        state.data = action.payload
      })
      .addCase(getUserData.rejected, (state) => {
        state.status = 'error'
      })
  },
})

export const getUserLogStatus = (state) => state.users.is_logged_in

export default usersSlice.reducer;
