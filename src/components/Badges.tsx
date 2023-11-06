import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Badge } from 'native-base'
import { Tag } from '@/pages/hole/post/components/HolePostAddTags'

interface Props {
  data: Tag[]
  onPress: (tag: Tag) => void
}

export function Badges({ data, onPress }: Props) {
  return (
    <View className={'w-full flex flex-row gap-2 flex-wrap'}>
      {data.map((tag) => {
        const body = tag.body

        return (
          <Pressable onPress={() => onPress(tag)} key={tag.id}>
            <Badge colorScheme="success" rounded={'lg'}>
              <Text>{`${body}`}</Text>
            </Badge>
          </Pressable>
        )
      })}
    </View>
  )
}
