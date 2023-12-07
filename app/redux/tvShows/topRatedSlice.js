import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getTopRated = createAsyncThunk('movies/getTopRated', async (param) => {
  const response = await axios.get(`/tv/top_rated`, {
    params: param
  })
  return response.data
})

export const topRatedSlice = createSlice({
  name: 'topRated',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTopRated.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.data = null;
        state.loading = 'pending'
      }
    })
    builder.addCase(getTopRated.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getTopRated.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.data = null;
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default topRatedSlice.reducer