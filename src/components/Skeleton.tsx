import { Skeleton, VStack } from 'native-base'
import { View } from 'react-native'

interface Props {
  nums: number
}
export function SkeletonLoading(props: Props) {
  return (
    <View className={'grid gap-3'}>
      {Array.from({ length: props.nums }).map((_, index) => (
        <VStack
          key={index}
          borderWidth="1"
          space={8}
          overflow="hidden"
          rounded="lg"
          py={5}
          px={5}
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
            backgroundColor: 'white',
          }}
        >
          <Skeleton size="16" rounded={'full'} />
          <Skeleton h="20" rounded={'lg'} />
          <Skeleton.Text px="4" />
        </VStack>
      ))}
    </View>
  )
}
