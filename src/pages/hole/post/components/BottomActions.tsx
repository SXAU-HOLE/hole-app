import { Keyboard, View } from 'react-native'
import { IconButton } from '@/components/IconButton'
import { useImagePicker } from '@/hooks/useImagePicker'
import { Toast } from '@/utils/toast'
import { EmojiIcon } from '@/components/Icons'
import { EmojiArea } from '@/components/components/EmojiArea'
import { useCallback, useState } from 'react'
import { EmojiItem } from '@/assets/emoji'
import { HolePostAddTags } from '@/pages/hole/post/components/HolePostAddTags'
import { useHolePostContext } from '@/shared/context/HolePostContext'
import { useTheme } from 'react-native-paper'

export function BottomActions() {
  const theme = useTheme()
  const {
    setImgs,
    form: { setValue, getValues },
    setFocus,
  } = useHolePostContext()

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
          <IconButton
            icon={'image-outline'}
            onPress={onImageSelect}
          ></IconButton>
          <HolePostAddTags />
          {showEmoji ? (
            <IconButton
              icon={'keyboard-outline'}
              iconColor={theme.colors.primary}
              onPress={() => {
                setFocus('body')
                setShowEmoji(false)
              }}
            />
          ) : (
            <IconButton
              icon={() => <EmojiIcon size={24} />}
              onPress={() => {
                Keyboard.dismiss()
                setShowEmoji(true)
              }}
            />
          )}
        </View>
      </View>
      <EmojiArea onSelect={onEmojiSelect} expandArea={showEmoji}></EmojiArea>
    </View>
  )
}
