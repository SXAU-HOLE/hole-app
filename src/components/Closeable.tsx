import { Pressable, View } from 'react-native'
import { CloseIcon } from '@/components/Icons'

export function Closeable({ onPress }: { onPress: () => void }) {
  return (
    <Pressable className={'absolute right-[-4]'} onPress={onPress}>
      <View
        className={
          'w-4 h-4 rounded-full bg-gray-500/30 items-center justify-center'
        }
      >
        <CloseIcon size={9} />
      </View>
    </Pressable>
  )
}
