import { View } from 'react-native'
import { ArrowLeftIcon } from '@/components/Icons'
import { IconButton, Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

interface Props extends NativeStackHeaderProps {}

export const Header = (props: Props) => {
  const navigation = useNavigation()

  return (
    <View
      className={'bg-background flex-row flex items-center justify-between'}
    >
      <View>
        <IconButton
          onPress={() => navigation.goBack()}
          icon={() => <ArrowLeftIcon size={25} color={'#000'} />}
        />
      </View>
      <View className={'absolute left-0 right-0 justify-center flex-row'}>
        <Text variant={'titleMedium'}>{props.options.title}</Text>
      </View>
    </View>
  )
}
