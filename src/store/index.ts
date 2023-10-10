import { configureStore } from '@reduxjs/toolkit'
import { UserSlice } from './reducer/user'

const store = configureStore({
  reducer: {
    user: UserSlice,
  },
})

export default store
