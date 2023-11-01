import { Text } from 'react-native'
import { Appbar } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useHoleDetail } from '@/query/hole'

export function HoleDetailHeader() {
  const navigation = useNavigation()
  const { data } = useHoleDetail()
  const params = useRoute().params as any

  return (
    <Appbar
      className={
        'w-screen overflow-hidden bg-white flex flex-row space-between h-12 border-b-[1px] border-black/5 items-center'
      }
    >
      <Appbar.BackAction
        onPress={() => navigation.goBack()}
      ></Appbar.BackAction>
      {params.id ? (
        <Text className={'text-xl color-primary font-medium'}>#{data?.id}</Text>
      ) : (
        <Text className={'text-lg font-medium'}>全部回复</Text>
      )}
    </Appbar>
  )
}
