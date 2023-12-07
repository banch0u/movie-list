import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getTvShowSearch = createAsyncThunk('search/getTvShowSearch', async (param) => {
  const response = await axios.get(`/search/tv`, {
    params: param
  })
  return response.data
})

export const tvShowSlice = createSlice({
  name: 'tvShow',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTvShowSearch.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.data = null;
        state.loading = 'pending'
      }
    })
    builder.addCase(getTvShowSearch.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getTvShowSearch.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.data = null;
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default tvShowSlice.reducer