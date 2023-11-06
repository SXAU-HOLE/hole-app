import { persistReducer, persistStore } from 'redux-persist'
import { UserReducer } from './reducer/user'
import createSecureStore from 'redux-persist-expo-securestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, createStore } from 'redux'
import { SearchReducer } from '@/store/reducer/search'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const SecureStorage = createSecureStore()

const userPersistReducer = persistReducer(
  {
    key: 'user',
    storage: SecureStorage,
  },
  UserReducer,
)

const searchPersistReducer = persistReducer(
  {
    key: 'search',
    storage: AsyncStorage,
  },
  SearchReducer,
)

const rootReducer = combineReducers({
  user: userPersistReducer,
  search: searchPersistReducer,
})

export const store = createStore(rootReducer)
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
