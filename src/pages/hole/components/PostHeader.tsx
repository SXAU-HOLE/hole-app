import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { CloseIcon } from '@/components/Icons'
import { Button, Text } from 'react-native-paper'
import { usePostContext } from '@/shared/context/HolePostContext'
import { useMutation } from '@tanstack/react-query'
import { PostHoleValidator } from '@/shared/validators/hole'
import { PostHoleRequest, UploadHoleImgRequest } from '@/apis/hole'
import { Toast } from '@/utils/toast'

export function PostHeader() {
  const navigator = useNavigation()
  const {
    form: { handleSubmit },
    imgs,
  } = usePostContext()

  const mutation = useMutation({
    mutationFn: async (data: PostHoleValidator) => {
      const resultImg = await UploadHoleImgRequest(imgs)
      console.log(resultImg)

      // return await PostHoleRequest({ ...data, imgs: resultImg })
    },
    onSuccess(data) {
      console.log(data)
      Toast.success({ text1: '成功发布帖子' })
      navigator.goBack()
    },
  })

  const onSubmit = async (data: any) => {
    mutation.mutate(data)
  }

  return (
    <View className={'h-10 flex flex-row items-center'}>
      <CloseIcon
        size={28}
        className={'flex-1'}
        onPress={() => navigator.goBack()}
      ></CloseIcon>

      <View className={'flex-1  flex items-center'}>
        <Text variant={'titleLarge'}>帖子</Text>
      </View>

      <View className={'flex-1 flex justify-center items-end'}>
        <View className={'w-16'}>
          <Button
            className={'h-9'}
            buttonColor={'#1B764098'}
            textColor={'white'}
            onPress={handleSubmit(onSubmit)}
          >
            发布
          </Button>
        </View>
      </View>
    </View>
  )
}
