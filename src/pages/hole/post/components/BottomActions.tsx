import { Keyboard, View } from 'react-native'
import { IconButton } from '@/components/IconButton'
import { useImagePicker } from '@/hooks/useImagePicker'
import { EmojiArea } from '@/components/components/EmojiArea'
import { useCallback, useState } from 'react'
import { EmojiItem } from '@/assets/emoji'
import { HolePostAddTags } from '@/pages/hole/post/components/HolePostAddTags'
import { useHolePostContext } from '@/shared/context/HolePostContext'
import { useTheme } from 'react-native-paper'
import { Toast } from '@/utils/toast'
import { Svg } from '@/components/Svg/Svg'
import Image from '@/assets/svg/Image.svg'
import Smile from '@/assets/svg/Smile.svg'
import HoleVote from '@/pages/hole/post/components/HoleVote'

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
            icon={() => <Svg SvgComponent={Image} size={24} />}
            onPress={onImageSelect}
          ></IconButton>
          <HolePostAddTags />
          <HoleVote />
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
              icon={() => <Svg SvgComponent={Smile} size={24} />}
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
