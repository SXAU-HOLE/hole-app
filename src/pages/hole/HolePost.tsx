import Page from '@/components/Page'
import { View } from 'react-native'
import { CloseIcon } from '@/components/Icons'
import { Button, Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { HolePostForm } from '@/pages/hole/components/HolePostForm'

export function PostHeader() {
  const navigator = useNavigation()

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
            onPress={() => {}}
            buttonColor={'#1B764098'}
            textColor={'white'}
          >
            发布
          </Button>
        </View>
      </View>
    </View>
  )
}
export function PostBody() {
  return (
    <View>
      <HolePostForm></HolePostForm>
    </View>
  )
}

export function HolePost() {
  return (
    <Page>
      <PostHeader />
      <PostBody />
    </Page>
  )
}
