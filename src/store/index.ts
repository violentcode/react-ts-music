import { configureStore } from '@reduxjs/toolkit'
import discoverReducer from './modules/discover'
import friendReducer from './modules/friend'
import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux/es/types'

const store = configureStore({
  reducer: {
    discover: discoverReducer,
    friend: friendReducer
  }
})

const state = store.getState()
type stateType = typeof state

export const useAppSelecter: TypedUseSelectorHook<stateType> = useSelector

export default store
