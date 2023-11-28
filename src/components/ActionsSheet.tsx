import { Func } from '@/shared/types'
import { Actionsheet } from 'native-base'
import { List } from 'react-native-paper'
import { View } from 'react-native'

export type SheetItem = {
  icon?: string | any
  title: string
  onPress?: Func
}

interface Props {
  isOpen: boolean
  onClose?: Func
  SheetList: SheetItem[]
}

export function ActionsSheet({ SheetList, onClose, isOpen }: Props) {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        {SheetList.map((item) => (
          <View
            key={item.title}
            className={'flex flex-row justify-start items-center w-full'}
          >
            <List.Item
              {...item}
              key={item.title}
              className={'border-b-[1px] border-gray-200 flex-1'}
              onPress={() => {
                item.onPress?.()
                onClose?.()
              }}
            />
          </View>
        ))}
        <List.Item title={'取消'} onPress={onClose} />
      </Actionsheet.Content>
    </Actionsheet>
  )
}
