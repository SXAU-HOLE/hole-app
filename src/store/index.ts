import { persistReducer, persistStore } from 'redux-persist'
import { UserReducer } from './reducer/user'
import createSecureStore from 'redux-persist-expo-securestore'
import { combineReducers, createStore } from 'redux'

const SecureStorage = createSecureStore()

const userPersistReducer = persistReducer(
  {
    key: 'user',
    storage: SecureStorage,
  },
  UserReducer,
)

const rootReducer = combineReducers({
  user: userPersistReducer,
})

export const store = createStore(rootReducer)
export const persistor = persistStore(store)
