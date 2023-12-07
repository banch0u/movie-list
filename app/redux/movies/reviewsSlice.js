import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getMovieReviews = createAsyncThunk('movies/getMovieReviews', async (query, param) => {
  const response = await axios.get(`/movie/${query}/reviews`, {
    params: param
  })
  return response.data
})

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieReviews.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.data = null;
        state.loading = 'pending'
      }
    })
    builder.addCase(getMovieReviews.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getMovieReviews.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.data = null;
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default reviewsSlice.reducer