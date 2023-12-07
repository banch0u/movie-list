import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getTrendingMovies = createAsyncThunk('trending/getTrendingMovies', async (param) => {
  const response = await axios.get(`/trending/movie/week`, {
    params: param
  })
  return response.data
})

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendingMovies.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.data = null;
        state.loading = 'pending'
      }
    })
    builder.addCase(getTrendingMovies.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getTrendingMovies.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.data = null;
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default moviesSlice.reducer