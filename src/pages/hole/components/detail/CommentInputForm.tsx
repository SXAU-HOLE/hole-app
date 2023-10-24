import { Keyboard, View } from 'react-native'
import { KeyboardVisible } from '@/components/KeyboardVisible'
import { AreaInput } from '@/components/form/AreaInput'
import { IconButton } from 'react-native-paper'
import { SmileIcon } from '@/components/Icons'
import { useCommentContext } from '@/shared/context/CommentContext'
import { useHoleComment } from '@/query/hole'
import { useMutation } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'
import { useMemo } from 'react'

export function CommentInputForm() {
  const {
    control,
    handleSubmit,
    reqFunc,
    id,
    resetField,
    inputRef,
    isReply,
    data,
    closeInput,
  } = useCommentContext()
  const { invalidateQuery } = useHoleComment()

  const placeHolder = useMemo(() => {
    if (isReply) {
      return '写下你的想法吧...'
    } else {
      return `回复 ${data?.user.username}`
    }
  }, [isReply, data])

  const mutation = useMutation({
    mutationFn: reqFunc,
    onSuccess(data) {
      Toast.show({
        type: 'success',
        text1: '留言成功！',
      })
      Keyboard.dismiss()
      resetField('body')
      invalidateQuery()
    },
  })

  const submit = (data: { body: string }) => {
    mutation.mutate({
      body: data.body,
      id,
    })
  }

  return (
    <KeyboardVisible>
      <View
        className={
          'w-full absolute bottom-0 border-t-[1px] border-t-black/5 bg-white'
        }
      >
        <View className={'py-1'}>
          <View
            className={
              'flex flex-row justify-center bg-white px-3 items-center'
            }
          >
            <View className={'flex-1'}>
              <View>
                <AreaInput
                  inputRef={inputRef}
                  name={'body'}
                  control={control}
                  className={'rounded-lg bg-gray-200 px-3 py-1'}
                  textAlignVertical={'center'}
                  placeholder={placeHolder}
                  multiline={true}
                  onBlur={closeInput}
                ></AreaInput>
              </View>
            </View>
            <View className={'w-24 flex flex-row'}>
              <IconButton
                icon={() => <SmileIcon size={24} />}
                onPress={() => {}}
              ></IconButton>
              <IconButton icon={'send'} onPress={handleSubmit(submit)} />
            </View>
          </View>
        </View>
      </View>
    </KeyboardVisible>
  )
}
