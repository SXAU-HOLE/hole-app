import store from '@/store'
import { useSelector } from 'react-redux'
import {
  logout as storeLogout,
  login as StoreLogin,
} from '@/store/reducer/user'
import { useLinkTo } from '@react-navigation/native'

export function useAuth() {
  const isLogin = useSelector((state: any) => state.user.login)
  const linkTo = useLinkTo()

  const login = (token: string) => {
    store.dispatch(StoreLogin(token))
    linkTo('/index')
  }

  const logout = () => {
    store.dispatch(storeLogout())
    linkTo('/auth')
  }

  return {
    isLogin,
    login,
    logout,
  }
}
