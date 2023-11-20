import { DeleteLikeHole, PostLikeHole } from '@/apis/hole'
import { IconButton } from '@/components/IconButton'
import { useHoleDetail } from '@/query/hole'
import { useMutation } from '@tanstack/react-query'
import { Text, View } from 'react-native'
import Like from '@/assets/svg/Like.svg'
import { Svg } from '@/components/Svg/Svg'

export function LikeHole() {
  const { data, toggleIsLike } = useHoleDetail()

  const mutation = useMutation(
    ['like', data],
    (id: string) => {
      const reqFunc = data.isLiked ? DeleteLikeHole : PostLikeHole

      return reqFunc({ id })
    },
    {
      async onSuccess() {
        await toggleIsLike()
      },
    },
  )

  const likeHole = async () => mutation.mutate(data.id)

  return (
    <View className={'flex justify-center items-center'}>
      <IconButton
        icon={() => <Svg SvgComponent={Like} size={20} active={data.isLiked} />}
        transparent={true}
        onPress={likeHole}
      />
      <Text className={'text-xs text-black/50 absolute top-10'}>
        {data!.favoriteCount}
      </Text>
    </View>
  )
}
