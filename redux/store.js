import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slice/appSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})
