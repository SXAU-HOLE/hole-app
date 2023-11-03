import * as MediaLibrary from 'expo-media-library'
import { Toast } from '@/utils/toast'
import * as FileSystem from 'expo-file-system'

export const saveToAlbum = async (url: string) => {
  try {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if (status === 'granted') {
      const localUri = await FileSystem.downloadAsync(
        url,
        FileSystem.documentDirectory + 'a.jpg',
      )
      await MediaLibrary.saveToLibraryAsync(localUri.uri)
      Toast.success({ text1: '保存图片成功' })
    }
  } catch (error: any) {
    Toast.error({ text1: '保存图片失败', text2: error.stack.toString() })
  }
}
