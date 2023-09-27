import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getPopularPeople = createAsyncThunk('movies/getPopularPeople', async (param) => {
  const response = await axios.get(`/person/popular`, {
    params: param
  })
  return response.data
})

export const popularSlice = createSlice({
  name: 'popular',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularPeople.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getPopularPeople.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getPopularPeople.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default popularSlice.reducer