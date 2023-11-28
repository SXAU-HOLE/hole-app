import { Actionsheet } from 'native-base'
import { List } from 'react-native-paper'
import React from 'react'
import { Func } from '@/shared/types'

interface Props {
  isOpen: boolean
  onClose?: Func
}

export function HoleActionSheet({ isOpen, onClose }: Props) {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <List.Section className={'w-full'}>
          <List.Item title={'举报'} onPress={() => {}} />
          <List.Item title={'删除'} onPress={() => {}} />
        </List.Section>
      </Actionsheet.Content>
    </Actionsheet>
  )
}
