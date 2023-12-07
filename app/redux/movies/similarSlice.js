import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getSimilarMovies = createAsyncThunk('movies/getSimilarMovies', async (query, param) => {
  const response = await axios.get(`/movie/${query}/similar`, {
    params: param
  })
  return response.data
})

export const similarSlice = createSlice({
  name: 'similar',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSimilarMovies.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.data = null;
        state.loading = 'pending'
      }
    })
    builder.addCase(getSimilarMovies.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getSimilarMovies.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.data = null;
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default similarSlice.reducer