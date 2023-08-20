import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux/es/types'
import recommendReducer from '@/views/discover/c-views/recommend/store'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})

const state = store.getState()
const dispatch = store.dispatch

type stateType = typeof state
type DispatchType = typeof dispatch

export const useAppSelecter: TypedUseSelectorHook<stateType> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch

export default store
