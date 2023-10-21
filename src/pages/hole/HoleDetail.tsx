import { View } from 'react-native'
import { DetialContent } from './components/DetailContent'
import { ScrollView } from 'react-native-gesture-handler'
import { DetailComment } from './components/DetailComment'
import { useHoleDetail } from '@/query/hole'

export function HoleDetail() {
  const { isSuccess } = useHoleDetail()

  return (
    <ScrollView>
      {isSuccess ? (
        <>
          <DetialContent></DetialContent>
          <DetailComment></DetailComment>
        </>
      ) : (
        <></>
      )}
    </ScrollView>
  )
}
