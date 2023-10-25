import { Text, View } from 'react-native'
import { AreaInput } from '@/components/form/AreaInput'
import { useForm } from 'react-hook-form'
import { PostHoleValidator } from '@/shared/validators/hole'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { FormImage } from '@/components/form/FormImage'
import { usePostContext } from '@/shared/context/HolePostContext'

export function HolePostForm({ height }: { height: number }) {
  const {
    form: { control },
    imgs,
    setImgs,
  } = usePostContext()

  return (
    <View
      style={{
        height: height,
      }}
      className={'flex space-y-2 py-2 px-3'}
    >
      <View className={'border-b-[1px] border-b-black/5'}>
        <AreaInput
          name={'title'}
          control={control}
          placeholder={'标题不是非必须的哦 ♥ (20字以内)'}
          style={{ fontSize: 18 }}
        ></AreaInput>
      </View>
      <View className={'flex-1'}>
        <AreaInput
          name={'body'}
          control={control}
          placeholder={'说点什么吧...'}
          multiline={true}
        ></AreaInput>
      </View>
      <View>
        <FormImage
          imgs={imgs}
          onCloseable={(index) => {
            setImgs((draft: string[]) => {
              draft.splice(index, 1)
            })
          }}
        ></FormImage>
      </View>
    </View>
  )
}
