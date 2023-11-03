import { View } from 'react-native'
import { AreaInput } from '@/components/form/AreaInput'
import { FormImage } from '@/components/form/FormImage'
import { useHolePostContext } from '@/shared/context/HolePostContext'
import { Button } from 'react-native-paper'

export function HolePostForm({ height }: { height: number }) {
  const {
    form: { control },
    imgs,
    setImgs,
    setFocus,
  } = useHolePostContext()

  const focus = () => {
    setFocus('body')
  }

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
          placeholder={'标题不是非必须的 (20字以内)'}
          style={{ fontSize: 18 }}
          autoFocus={true}
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
      <Button onPress={focus}> 测试</Button>
      <View>
        <FormImage
          imgs={imgs}
          onCloseable={(index) => {
            setImgs((draft: string[]) => {
              draft.splice(index, 1)
            })
          }}
        />
      </View>
    </View>
  )
}
