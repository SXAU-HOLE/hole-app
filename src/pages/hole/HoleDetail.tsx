import { View } from 'react-native'
import { DetialContent } from './components/DetailContent'
import { ScrollView } from 'react-native-gesture-handler'
import { DetailComment } from './components/DetailComment'
import { useHoleDetail } from '@/query/hole'
import { FullPage } from '@/components/Page'
import { Text, TextInput } from 'react-native-paper'
import useKeyboardHeight from '@/hooks/useKeyboardHeight'

export function HoleDetail() {
  const { isSuccess } = useHoleDetail()
  const keyboardHeight = useKeyboardHeight()

  return (
    <FullPage>
      <ScrollView>
        {isSuccess ? (
          <>
            <DetialContent></DetialContent>
            <DetailComment></DetailComment>
          </>
        ) : (
          <Text>空</Text>
        )}
      </ScrollView>
      <View
        className={'absolute bottom-0 right-0 left-0 h-10 bg-white'}
        style={{
          bottom: keyboardHeight,
        }}
      >
        <TextInput />
      </View>
    </FullPage>
  )
}
