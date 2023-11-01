import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useHoleDetail } from '@/query/hole'

export function HoleDetailHeader() {
  const navigation = useNavigation()
  const { data } = useHoleDetail()

  return (
    <Appbar
      className={
        'w-screen overflow-hidden bg-white flex flex-row space-between h-12 border-b-[1px] border-black/5'
      }
    >
      <Appbar.BackAction
        onPress={() => navigation.goBack()}
      ></Appbar.BackAction>
      <View>
        <Text className={'text-xl color-primary font-medium'}>#{data?.id}</Text>
      </View>
    </Appbar>
  )
}
