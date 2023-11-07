import { store } from '@/store'
import {
  login as StoreLogin,
  logout as storeLogout,
} from '@/store/reducer/user'
import { useLinkTo } from '@react-navigation/native'

export function useAuth() {
  const isLogin = store.getState().user.isLogin
  const linkTo = useLinkTo()

  const login = (token: string) => {
    store.dispatch(StoreLogin(token))
    // linkTo('/index')
  }

  const logout = () => {
    store.dispatch(storeLogout())
    // linkTo('/auth')
  }

  return {
    isLogin,
    login,
    logout,
  }
}
