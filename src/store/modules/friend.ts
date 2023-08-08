import { createSlice } from '@reduxjs/toolkit'

const friendSlice = createSlice({
  name: 'friend',
  reducers: {
    addCount(state, { payload }) {
      state.count = state.count + payload
    }
  },
  initialState: {
    count: 0
  }
})

export default friendSlice.reducer
