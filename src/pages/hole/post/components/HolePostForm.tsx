import { Pressable, Text, View } from 'react-native'
import { AreaInput } from '@/components/form/AreaInput'
import { FormImage } from '@/components/form/FormImage'
import { useHolePostContext } from '@/shared/context/HolePostContext'
import EditIcon from '@/components/Svg/EditIcon'
import { CloseIcon } from '@/components/Icons'

export function HolePostForm({ height }: { height: number }) {
  const {
    form: { control },
    imgs,
    setImgs,
    vote,
    setVote,
  } = useHolePostContext()

  const clearVote = () => {
    setVote({
      title: '',
      items: [],
    })
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
        ></AreaInput>
      </View>
      <View className={'flex-1'}>
        <AreaInput
          name={'body'}
          control={control}
          placeholder={'说点什么吧...'}
          multiline={true}
          autoFocus={true}
        ></AreaInput>
      </View>

      {vote.title !== '' && (
        <View
          className={
            'h-10 bg-gray-200 rounded-lg flex flex-row items-center  justify-between px-5'
          }
        >
          <View className={'flex flex-row space-x-2'}>
            <EditIcon />
            <Text>{vote.title}</Text>
          </View>

          <Pressable onPress={clearVote}>
            <View
              className={
                'w-4 h-4 rounded-full bg-gray-500/30 items-center justify-center'
              }
            >
              <CloseIcon size={9} />
            </View>
          </Pressable>
        </View>
      )}

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
