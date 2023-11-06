import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import produce from 'immer'

const initialState: {
  hole: string[]
} = {
  hole: [],
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeHoleSearchData(
      state,
      action: PayloadAction<(draft: string[]) => void>,
    ) {
      state.hole = produce(state.hole, action.payload)
    },
  },
})

export const { changeHoleSearchData } = searchSlice.actions

export const SearchReducer = searchSlice.reducer
