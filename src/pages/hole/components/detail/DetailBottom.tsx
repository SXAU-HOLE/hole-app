import { View } from 'react-native'
import { IconButton } from 'react-native-paper'
import useKeyboardHeight from '@/hooks/useKeyboardHeight'
import { AreaInput } from '@/components/form/AreaInput'
import { SmileIcon } from '@/components/Icons'
import { useCommentContext } from '@/shared/context/CommentContext'
import { useMutation } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'

export function DetailBottom() {
  const keyboardHeight = useKeyboardHeight()
  const { control, handleSubmit, reqFunc, id } = useCommentContext()

  const mutation = useMutation({
    mutationFn: reqFunc,
    onSuccess() {
      Toast.show({
        type: 'success',
        text1: '留言成功！',
      })
    },
  })

  const submit = (data: { body: string }) => {
    mutation.mutate({
      body: data.body,
      id,
    })
  }

  return (
    <View
      className={
        'absolute bottom-0 right-0 left-0 bg-white border-t-[1px] border-black/5'
      }
      style={{
        bottom: keyboardHeight,
      }}
    >
      <View className={'py-1'}>
        <View
          className={'flex flex-row justify-center bg-white px-3 items-center'}
        >
          <View className={'flex-1'}>
            <View>
              <AreaInput
                name={'body'}
                control={control}
                className={'rounded-lg bg-gray-200 px-3 py-1'}
                textAlignVertical={'center'}
                placeholder={'写下你的想法吧...'}
                multiline={true}
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
  )
}
