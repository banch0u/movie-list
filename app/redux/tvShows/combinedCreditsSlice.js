import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getTvShowCombinedCredits = createAsyncThunk('tvShows/getTvShowCombinedCredits', async (query, param) => {
  const response = await axios.get(`/tv/${query}/aggregate_credits`, {
    params: param
  })
  return response.data
})

export const combinedCreditsSlice = createSlice({
  name: 'combinedCredits',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTvShowCombinedCredits.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getTvShowCombinedCredits.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getTvShowCombinedCredits.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default combinedCreditsSlice.reducer