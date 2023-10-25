import { Keyboard, View } from 'react-native'
import { IconButton } from '@/components/IconButton'
import { usePostContext } from '@/shared/context/HolePostContext'
import { useImagePicker } from '@/hooks/useImagePicker'
import { Toast } from '@/utils/toast'
import { EmojiIcon } from '@/components/Icons'
import { EmojiArea } from '@/components/components/EmojiArea'
import { useCallback, useState } from 'react'
import { EmojiItem } from '@/assets/emoji'

export function BottomActions() {
  const {
    setImgs,
    form: { setValue, getValues },
  } = usePostContext()
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
    },
    onError() {
      Toast.error({ text1: '图片选择失败' })
    },
  })

  const [showEmoji, setShowEmoji] = useState(false)

  const onEmojiSelect = useCallback((emoji: EmojiItem) => {
    setValue('body', `${getValues('body') || ''}${emoji.name}`)
  }, [])

  return (
    <View className={'pt-2 border-t-[1px] border-t-black/5'}>
      <View className={'px-2'}>
        <View className={'flex flex-row items-center justify-between'}>
          <IconButton icon={'image'} onPress={onImageSelect}></IconButton>
          <IconButton
            icon={() => <EmojiIcon size={24} />}
            onPress={() => {
              setShowEmoji(!showEmoji)
              Keyboard.dismiss()
            }}
          />
        </View>
      </View>
      {showEmoji && <EmojiArea onSelect={onEmojiSelect}></EmojiArea>}
    </View>
  )
}
