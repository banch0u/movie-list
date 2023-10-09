import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getTvShowSeasonDetails = createAsyncThunk(
  'tvShows/getTvShowSeasonDetails',
  async ({ seriesId, seasonId, param }) => {
    const response = await axios.get(`/tv/${seriesId}/season/${seasonId}`, {
      params: param
    })
    return response.data
  }
)

export const seasonDetailsSlice = createSlice({
  name: 'seasonDetails',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTvShowSeasonDetails.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getTvShowSeasonDetails.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getTvShowSeasonDetails.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default seasonDetailsSlice.reducer