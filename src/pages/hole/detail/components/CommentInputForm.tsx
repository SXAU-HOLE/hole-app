import { Keyboard, View } from 'react-native'
import { KeyboardVisible } from '@/components/KeyboardVisible'
import { AreaInput } from '@/components/form/AreaInput'
import { IconButton } from 'react-native-paper'
import { useCommentContext } from '@/shared/context/CommentContext'
import { useHoleCommentQuery, useReplyListQuery } from '@/query/hole'
import { useMutation } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'
import { useCallback, useMemo, useState } from 'react'
import { useSelectImage } from '@/hooks/useSelectImage'
import { CameraIcon, EmojiIcon } from '@/components/Icons'
import { FormImage } from '@/components/form/FormImage'
import { UploadHoleImgRequest } from '@/apis/hole'
import { EmojiArea } from '@/components/components/EmojiArea'
import { EmojiItem } from '@/assets/emoji'

export function CommentInputForm() {
  const {
    control,
    handleSubmit,
    reqFunc,
    resetField,
    isReply,
    data,
    closeInput,
    getValues,
    setValue,
  } = useCommentContext()
  const { invalidateQuery: invalidateComment, id } = useHoleCommentQuery()

  const { invalidateQuery: invalidateReply } = useReplyListQuery()

  const placeHolder = useMemo(() => {
    if (isReply) {
      return '写下你的想法吧...'
    } else {
      return `回复 ${data!.user!.username}`
    }
  }, [isReply, data])

  const { onSelectImage, imgs, setImgs } = useSelectImage({
    selectionLimit: 2,
  })

  const mutation = useMutation({
    mutationFn: reqFunc,
    async onSuccess() {
      Toast.show({
        type: 'success',
        text1: '留言成功！',
      })
      Keyboard.dismiss()
      resetField('body')

      await invalidateComment()
      await invalidateReply()
    },
  })

  const submit = async (data: { body: string }) => {
    const result = await UploadHoleImgRequest(imgs)
    mutation.mutate({
      body: data.body,
      imgs: result,
      id,
    })
  }

  const [showEmoji, setShowEmoji] = useState(false)
  const onEmojiSelect = useCallback((emoji: EmojiItem) => {
    setValue('body', `${getValues('body') || ''}${emoji.name}`)
  }, [])

  return (
    <KeyboardVisible>
      <View className={'w-full absolute bottom-[150] px-3'}>
        <FormImage
          imgs={imgs}
          onCloseable={(index) =>
            setImgs((draft) => {
              draft!.splice(index, 1)
            })
          }
        />
      </View>
      <View
        className={
          'w-full absolute bottom-0 border-t-[1px] border-t-black/5 bg-white'
        }
      >
        <View className={'py-1 flex px-3 flex-col'}>
          <View className={'flex flex-row justify-center bg-white  items-end'}>
            <View className={'flex-1'}>
              <View>
                <AreaInput
                  name={'body'}
                  control={control}
                  className={'rounded-lg bg-gray-200 px-3 py-2'}
                  placeholder={placeHolder}
                  multiline={true}
                  onBlur={closeInput}
                  autoFocus={true}
                  style={{
                    minHeight: 80,
                  }}
                ></AreaInput>
              </View>
            </View>
            <View className={'w-12'}>
              <IconButton icon={'send'} onPress={handleSubmit(submit)} />
            </View>
          </View>

          <View
            className={
              'h-12 flex flex-row justify-start items-center space-x-10 px-3'
            }
          >
            <CameraIcon size={24} onPress={onSelectImage} />
            <EmojiIcon
              size={24}
              onPress={() => setShowEmoji(!showEmoji)}
            ></EmojiIcon>
          </View>
        </View>
        <EmojiArea onSelect={onEmojiSelect} expandArea={showEmoji} />
      </View>
    </KeyboardVisible>
  )
}
