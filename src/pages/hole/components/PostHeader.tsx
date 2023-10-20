import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { CloseIcon } from '@/components/Icons'
import { Button, Text } from 'react-native-paper'
import { usePostContext } from '@/shared/context/HolePostContext'
import { useMutation } from '@tanstack/react-query'
import { PostHoleValidator } from '@/shared/validators/hole'
import { PostHoleRequest, UploadHoleImgRequest } from '@/apis/hole'

export function PostHeader() {
  const navigator = useNavigation()
  const {
    form: { handleSubmit },
    imgs,
  } = usePostContext()

  const mutation = useMutation({
    mutationFn: async (data: PostHoleValidator) => {
      const resultImg = await UploadHoleImgRequest(imgs)

      console.log('resultImg', resultImg)

      // return PostHoleRequest({
      //   imgs,
      // })
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
    // mutation.mutate(data)
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
