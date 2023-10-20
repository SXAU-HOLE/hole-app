import { View } from 'react-native'
import { IconButton } from '@/components/IconButton'
import { usePostContext } from '@/shared/context/HolePostContext'
import { useImagePicker } from '@/hooks/useImagePicker'
import { Toast } from '@/utils/toast'

export function BottomActions() {
  const { imgs, setImgs } = usePostContext()
  const { onImageSelect } = useImagePicker({
    onSuccess(res) {
      setImgs((draft: string[]) => {
        for (const assets of res.assets!) {
          if (draft!.length >= 4) {
            Toast.error({ text1: '最多只能选4张图片哦' })
            return
          }
          draft.push(assets.uri)
        }
      })
      console.log(imgs)
    },
    onError() {
      Toast.error({ text1: '图片选择失败' })
    },
  })

  return (
    <View className={'pt-2 border-t-[1px] border-t-black/5'}>
      <View className={'px-2'}>
        <View className={'flex flex-row items-center justify-between'}>
          <IconButton icon={'image'} onPress={onImageSelect}></IconButton>
        </View>
      </View>
    </View>
  )
}
