import { Text, View } from 'react-native'
import { Button, IconButton } from 'react-native-paper'
import { Actionsheet } from 'native-base'
import { useFieldArray, useForm } from 'react-hook-form'
import Input from '@/components/form/Input'
import { useState } from 'react'
import { Closeable } from '@/components/Closeable'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { HolePostVoteClassValidator } from '@/shared/validators/hole/post'
import { useHolePostContext } from '@/shared/context/HolePostContext'

const VoteForm = ({ close }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<HolePostVoteClassValidator>({
    mode: 'onSubmit',
    resolver: classValidatorResolver(HolePostVoteClassValidator),
    defaultValues: { items: [{ value: '' }, { value: '' }] },
  })

  const { setVote } = useHolePostContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  })

  const addItem = () => {
    append({ value: '' })
  }

  const onSubmit = (data: any) => {
    console.log(data)
    setVote({
      title: data.title,
      items: data.items,
    })
    close()
  }

  return (
    <View className={'w-full space-y-2 h-screen'}>
      <Input
        control={control}
        name={'title'}
        label={'投票标题'}
        mode={'flat'}
      />
      {fields.map((field, index) => (
        <View key={field.id} className={'relative'}>
          <Input
            control={control}
            name={`items.${index}.value`}
            label={`选项${index + 1}`}
          ></Input>
          {fields.length > 2 && (
            <View className={'absolute right-0 top-1'}>
              <Closeable onPress={() => remove(index)} />
            </View>
          )}
        </View>
      ))}
      <Button mode={'elevated'} onPress={addItem}>
        + 添加选项
      </Button>
      <View>
        <Button onPress={handleSubmit(onSubmit)} mode={'contained'}>
          创建投票
        </Button>
      </View>
    </View>
  )
}

const HoleVote = () => {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => {
    setIsOpen(false)
  }

  const open = () => {
    setIsOpen(true)
  }

  return (
    <View>
      <IconButton icon={'link'} onPress={open} />
      <Actionsheet isOpen={isOpen} onClose={close} hideDragIndicator>
        <Actionsheet.Content>
          <View
            className={
              'w-full flex flex-row items-center justify-center relative'
            }
          >
            <Text className={'m-3'}>发布投票</Text>
            <Text className={'absolute right-3'} onPress={close}>
              取消
            </Text>
          </View>
          <View className={'w-full'}>
            <VoteForm close={() => close()} />
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  )
}

export default HoleVote
