import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { CloseIcon } from '@/components/Icons'
import { Button, Text } from 'react-native-paper'
import { useHolePostContext } from '@/shared/context/HolePostContext'
import { useMutation } from '@tanstack/react-query'
import { PostHoleValidator } from '@/shared/validators/hole'
import { PostHoleRequest, UploadHoleImgRequest } from '@/apis/hole'
import { useHoleList } from '@/query/hole'
import { Toast } from '@/utils/toast'

export function PostHeader() {
  const navigator = useNavigation()
  const {
    form: { handleSubmit },
    imgs,
  } = useHolePostContext()

  const mutation = useMutation({
    mutationFn: async (data: PostHoleValidator) => {
      let res = []

      if (imgs.length) {
        const response = await UploadHoleImgRequest(imgs)
        res = response?.data || response
      }

      // 创建tags
      const reg = /#(.*?)#/g
      const part = new Set(data.body?.match(reg))
      const uniquePart = Array.from(part)

      return await PostHoleRequest({
        ...data,
        imgs: res,
        tags: uniquePart,
      })
    },
    async onSuccess(data) {
      console.log('post', data)
      Toast.success({ text1: '成功发布帖子' })
      navigator.goBack()
      // TODO  刷新列表
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
