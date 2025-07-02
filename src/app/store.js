import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../features/counter/filterSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
})
