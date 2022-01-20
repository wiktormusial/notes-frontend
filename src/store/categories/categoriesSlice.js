import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import getToken from '@utils/Auth/getToken'
import { userLoggedOut } from '@store/users/usersSlice'

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async() => {
    const token = getToken()
    if (token !== undefined) {
      const response = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}categories`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        }
      })
      return response.data
    }
  }
)

export const addNewCategory = createAsyncThunk(
  'categories/addNewCategory',
  async(values) => {
    const token = getToken()
    if (token !== undefined) {
      const response = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}categories`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        },
        data: {
          name: values.name,
          desc: '',
        }
      })
      return response.data
    }
  }
)

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async(id) => {
    const token = getToken()
    if (token !== undefined) {
      const response = await axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API_URL}categories/${id}`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        },
      })
      return response.data
    }
  }
)

export const initialState = {
  status: 'idle',
  error: null,
  categories: []
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.categories = action.payload
      })
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
    builder
      .addCase(addNewCategory.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(addNewCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload)
      })
    builder
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(element => element.id !== parseInt(action.meta.arg))
      })
    builder.addCase(userLoggedOut, (state) => {
      state.status = 'idle'
      state.categories = []
    })
  }
})

export const getCategoriesStatus = (state) => state.categories.status
export const getCategories = (state) => state.categories.categories

export default categoriesSlice.reducer;
