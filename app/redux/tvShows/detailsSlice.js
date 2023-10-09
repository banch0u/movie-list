import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getTvShowsDetails = createAsyncThunk('tvShows/getTvShowsDetails', async (query, param) => {
  const response = await axios.get(`/tv/${query}`, {
    params: param
  })
  return response.data
})

export const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTvShowsDetails.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getTvShowsDetails.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getTvShowsDetails.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default detailsSlice.reducer