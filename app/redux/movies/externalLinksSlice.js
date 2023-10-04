import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getMovieExternalLinks = createAsyncThunk('movies/getMovieExternalLinks', async (query) => {
  const response = await axios.get(`/movie/${query}/external_ids`)
  return response.data
})

export const externalLinksSlice = createSlice({
  name: 'externalLinks',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieExternalLinks.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getMovieExternalLinks.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getMovieExternalLinks.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default externalLinksSlice.reducer