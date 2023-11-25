import { Button, IconButton, Text, TouchableRipple } from 'react-native-paper'
import { useState } from 'react'
import { Actionsheet } from 'native-base'
import { FlatList, View } from 'react-native'
import Input from '@/components/form/Input'
import { useForm } from 'react-hook-form'
import { useTagsQuery } from '@/query/tags'
import { SecondaryText } from '@/components/Text/SecondaryText'
import { useHolePostContext } from '@/shared/context/HolePostContext'
import { Func } from '@/shared/types'
import { Svg } from '@/components/Svg/Svg'
import Attach from '@/assets/svg/Attach.svg'

export interface Tag {
  id: string
  body: string
}

export function HolePostAddTags() {
  const [open, setOpen] = useState(false)

  const { data } = useTagsQuery()
  const { setValue, getValues } = useHolePostContext()

  const handlePressTags = (tag: string) => {
    setOpen(false)
    let body = getValues('body') ?? ''
    body = body.concat(tag)
    setValue('body', body)
  }

  return (
    <>
      <Actionsheet
        isOpen={open}
        onClose={() => setOpen(!open)}
        hideDragIndicator
      >
        <Actionsheet.Content>
          <PostAddTagsHeader handlePressTags={handlePressTags} />
          <View className={'h-[90vh] w-full'}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TagItem
                  data={item}
                  handlePressTags={() => handlePressTags(item.body)}
                />
              )}
              ListHeaderComponent={() => (
                <SecondaryText className="p-3">热议话题</SecondaryText>
              )}
            ></FlatList>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
      <IconButton
        icon={() => <Svg SvgComponent={Attach} size={24} />}
        onPress={() => setOpen(!open)}
      />
    </>
  )
}

const TagItem = ({
  data,
  handlePressTags,
}: {
  data: any
  handlePressTags: Func
}) => {
  return (
    <TouchableRipple
      onPress={handlePressTags}
      className={
        'w-full  px-2 py-2 flex justify-center border-b-[0.5px] border-b-black/5'
      }
    >
      <View className={'flex flex-row items-center justify-between'}>
        <Text variant={'bodyLarge'}>{data.body}</Text>
        <View className={'flex flex-row items-center space-x-3'}>
          <SecondaryText>热度:</SecondaryText>
          <Text className={'color-primary text-2xl'}>{data.holesCount}</Text>
        </View>
      </View>
    </TouchableRipple>
  )
}

const PostAddTagsHeader = ({ handlePressTags }: { handlePressTags: Func }) => {
  const { control, handleSubmit } = useForm()

  const submit = (data: any) => {
    handlePressTags(`#${data.tag}#`)
  }

  return (
    <View
      className={
        'flex flex-row w-full justify-between items-center pl-3 h-14 border-b-[1px] border-b-black/5'
      }
    >
      <Text className={'text-xl color-primary'}>#</Text>
      <Input
        control={control}
        name={'tag'}
        label={''}
        className={'h-10 flex-1 mx-3'}
        clearButtonMode={'always'}
        placeholder={'请输入想添加的话题吧！'}
      />
      <Button mode={'contained'} onPress={handleSubmit(submit)}>
        确定
      </Button>
    </View>
  )
}
