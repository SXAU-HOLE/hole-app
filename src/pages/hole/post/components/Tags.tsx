import { Tag } from '@/pages/hole/post/components/HolePostAddTags'
import { Text } from 'react-native-paper'
import { View } from 'react-native'

export function TagsList({ tags }: { tags: Tag[] }) {
  return (
    <View className={'flex flex-row space-x-1'}>
      {tags.map((tag) => (
        <Text key={tag.id} className={'text-primary'}>
          {tag.body}
        </Text>
      ))}
    </View>
  )
}
