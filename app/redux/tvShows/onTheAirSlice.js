import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getOnTheAir = createAsyncThunk('tvShows/getOnTheAir', async (param) => {
  const response = await axios.get(`/tv/on_the_air`, {
    params: param
  })
  return response.data
})

export const onTheAirSlice = createSlice({
  name: 'onTheAir',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOnTheAir.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getOnTheAir.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getOnTheAir.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default onTheAirSlice.reducer