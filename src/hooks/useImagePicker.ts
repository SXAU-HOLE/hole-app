import * as ImagePicker from 'expo-image-picker'
import Toast from 'react-native-toast-message'

interface Options extends ImagePicker.ImagePickerOptions {
  onSuccess: (data: ImagePicker.ImagePickerResult) => any
  onError?: (data: ImagePicker.ImagePickerErrorResult) => any
}

export function useImagePicker({ onSuccess, onError, ...options }: Options) {
  const onImageSelect = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        selectionLimit: 4,
        quality: 0.8,
        ...options,
      })
      console.log('result', result)
      if (!result.canceled) {
        onSuccess(result)
      }
    } catch (error) {
      if (!onError) {
        Toast.show({
          type: 'error',
          text1: '请求失败了',
          text2: '图片选择失败了',
        })
        return
      }

      onError(error as ImagePicker.ImagePickerErrorResult)
    }
  }
  return {
    onImageSelect,
  }
}
