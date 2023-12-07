import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/index'

export const getPersonCombinedCredits = createAsyncThunk('people/getPersonCombinedCredits', async (query, param) => {
  const response = await axios.get(`/person/${query}/combined_credits`, {
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
    builder.addCase(getPersonCombinedCredits.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.data = null;
        state.loading = 'pending'
      }
    })
    builder.addCase(getPersonCombinedCredits.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getPersonCombinedCredits.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.data = null;
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default combinedCreditsSlice.reducer