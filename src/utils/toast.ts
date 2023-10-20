import RNToast from 'react-native-toast-message'
import type { ToastShowParams } from 'react-native-toast-message'

export const Toast = {
  success(params: ToastShowParams) {
    RNToast.show({
      type: 'success',
      ...params,
      text1: `${params.text1}`,
    })
  },
  error(params: ToastShowParams) {
    RNToast.show({
      type: 'error',
      ...params,
      text1: `${params.text1}`,
    })
  },
  info(params: ToastShowParams) {
    RNToast.show({
      type: 'info',
      ...params,
      text1: `${params.text1}`,
    })
  },
}
