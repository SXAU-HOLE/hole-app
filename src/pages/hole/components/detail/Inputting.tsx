import { TextInput, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { AreaInput } from '@/components/form/AreaInput'
import { useForm } from 'react-hook-form'
import { SmileIcon } from '@/components/Icons'

export function Inputting() {
  return <View></View>
}

export function NotInputting() {
  const { control, handleSubmit } = useForm<{
    comment: string
  }>()

  const submit = (data: any) => {
    console.log(data)
  }

  return (
    <View className={'flex flex-row justify-center bg-white px-3 items-center'}>
      <View className={'flex-1'}>
        <View>
          <AreaInput
            name={'comment'}
            control={control}
            className={'rounded-lg bg-gray-200 px-3 py-1'}
            textAlignVertical={'center'}
            placeholder={'写下你的想法吧...'}
            multiline={true}
          ></AreaInput>
        </View>
      </View>
      <View className={'w-24 flex flex-row'}>
        <IconButton
          icon={() => <SmileIcon size={24} />}
          onPress={() => {}}
        ></IconButton>
        <IconButton
          icon={'send'}
          onPress={() => {
            handleSubmit(submit)
          }}
        />
      </View>
    </View>
  )
}
