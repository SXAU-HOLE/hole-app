import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  isLogin: boolean
  tooken: string | null
}

const initialState: UserState = {
  isLogin: false,
  tooken: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      console.log('login')
      state.isLogin = true
      state.tooken = action.payload
    },
    logout: (state) => {
      state.isLogin = false
      state.tooken = null
    },
  },
})

export const { login, logout } = userSlice.actions

export const UserReducer = userSlice.reducer
