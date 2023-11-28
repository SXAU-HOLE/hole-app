import type { ToastShowParams } from 'react-native-toast-message'
import RNToast from 'react-native-toast-message'

export const Toast = {
  success(params: ToastShowParams | string) {
    const toastParams = typeof params === 'object' ? params : { text1: params }

    RNToast.show({
      type: 'success',
      ...toastParams,
    })
  },
  error(params: ToastShowParams | string) {
    const toastParams = typeof params === 'object' ? params : { text1: params }

    RNToast.show({
      type: 'error',
      ...toastParams,
    })
  },
  info(params: ToastShowParams | string) {
    const toastParams = typeof params === 'object' ? params : { text1: params }

    RNToast.show({
      type: 'info',
      ...toastParams,
    })
  },
}
