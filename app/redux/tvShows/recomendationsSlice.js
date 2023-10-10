import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getRecomendedTvShows = createAsyncThunk('tvShows/getRecomendedTvShows', async (query, param) => {
  const response = await axios.get(`/tv/${query}/recommendations`, {
    params: param
  })
  return response.data
})

export const recomendationsSlice = createSlice({
  name: 'recomendations',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecomendedTvShows.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getRecomendedTvShows.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getRecomendedTvShows.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default recomendationsSlice.reducer