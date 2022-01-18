import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from 'axios'
import getToken from '@utils/Auth/getToken'

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
          author: 1,
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

const initialState = {
  status: 'idle',
  error: null,
  categories: []
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    reloadCategoriesState(state) {
      state.status = 'idle'
      state.categories = []
    },
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
  }
})

export const { reloadCategoriesState } = categoriesSlice.actions

export const getCategoriesStatus = (state) => state.categories.status
export const getCategories = (state) => state.categories.categories

export default categoriesSlice.reducer;
