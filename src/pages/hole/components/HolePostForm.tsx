import { View } from 'react-native'
import { TextInput } from 'react-native'
import { AreaInput } from '@/components/form/AreaInput'
import { useForm } from 'react-hook-form'
import { PostHoleValidator } from '@/shared/validators/hole'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'

export function HolePostForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PostHoleValidator>({
    resolver: classValidatorResolver(PostHoleValidator),
  })

  return (
    <View style={{ height: 400 }} className={'flex space-y-2 py-2'}>
      <View className={'border-b-[1px] border-b-black/5'}>
        <TextInput
          placeholder={'写个响亮的标题吧(没有标题也可以发布哦)'}
        ></TextInput>
      </View>
      <View className={'flex-1'}>
        <AreaInput
          name={'body'}
          control={control}
          placeholder={'请输入正文内容(200-2000字)'}
          multiline={true}
        ></AreaInput>
      </View>
    </View>
  )
}
