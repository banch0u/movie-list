import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getMovieImages = createAsyncThunk('movies/getMovieImages', async (query) => {
  const response = await axios.get(`/movie/${query}/images`)
  return response.data
})

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieImages.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getMovieImages.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getMovieImages.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default imagesSlice.reducer