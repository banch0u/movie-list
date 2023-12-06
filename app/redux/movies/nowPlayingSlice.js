import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getNowPlaying = createAsyncThunk('movies/getNowPlaying', async (param) => {
  const response = await axios.get(`/movie/now_playing`, {
    params: param
  })
  return response.data
})

export const nowPlayingSlice = createSlice({
  name: 'nowPlaying',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNowPlaying.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getNowPlaying.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getNowPlaying.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default nowPlayingSlice.reducer