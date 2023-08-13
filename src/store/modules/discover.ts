import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const discoverSlice = createSlice({
  name: 'discover',
  reducers: {
    changeName(state, { payload }: PayloadAction<string>) {
      state.name = payload
    }
  },
  initialState: {
    name: 'why',
    age: 18
  }
})

export const { changeName } = discoverSlice.actions

export default discoverSlice.reducer
