import * as ImagePicker from 'expo-image-picker'

import { useImmer } from 'use-immer'
import { Toast } from '@/utils/toast'

export function useSelectImage(options: ImagePicker.ImagePickerOptions) {
  const [imgs, setImgs] = useImmer<string[]>([])

  const onSelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        selectionLimit: 3,
        quality: 0.9,
        ...options,
      })

      if (!result.canceled) {
        setImgs((draft: any) => {
          for (const assets of result.assets) {
            // @ts-ignore
            if (draft.length >= options.selectionLimit) {
              Toast.error({
                text1: `最多只能选${options.selectionLimit}张图片哦`,
              })
              return
            }
            draft.push(assets.uri)
          }
        })
      }
    } catch (err) {
      Toast.error({ text1: '图片选择失败' })
    }
  }

  return {
    imgs,
    setImgs,
    onSelectImage,
  }
}
