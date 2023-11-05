import TimeText from '@/components/Text/TimeText'
import { UserText } from '@/components/Text/UserText'
import UserAvatar from '@/components/UserAvatar'
import { Pressable, StyleSheet, View } from 'react-native'
import { Text, TouchableRipple, useTheme } from 'react-native-paper'
import { ReplyBody } from '@/pages/hole/detail/reply/ReplyBody'
import { SecondaryText } from '@/components/Text/SecondaryText'
import { useState } from 'react'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Func } from '@/shared/types'
import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { AutoSizeImageList } from '@/components/Image/AutoSizeImageList'
import { EmojiableText } from '@/components/Text/EmojiableText'

interface Props {
  data: IHoleCommentListItem | IHoleReplyListItem
  onBodyPress?: Func
  postLikeRequest: (data: { id: string }) => any
  deleteLikeRequest: (data: { id: string }) => any
  isRenderReply?: boolean
}

export function CommentItem({
  data,
  deleteLikeRequest,
  postLikeRequest,
  onBodyPress,
  isRenderReply = true,
}: Props) {
  const theme = useTheme()

  const mutation = useMutation({
    mutationFn: (isLike: boolean) =>
      isLike
        ? deleteLikeRequest({ id: data.id })
        : postLikeRequest({ id: data.id }),
  })

  return (
    <TouchableRipple
      className="px-3 bg-white"
      onPress={() => onBodyPress?.(data)}
    >
      <View
        className={
          'flex flex-row border-b-[1px] border-black/5 py-2 rounded-lg'
        }
      >
        <View>
          <View className={'w-full flex flex-row'}>
            <View className={'w-1/12'}>
              <UserAvatar url={data.user.avatar} size={30} />
            </View>
            <View className={'w-11/12 px-2'}>
              <View>
                <UserText username={data.user.username} />
              </View>
              <View className={'flex flex-row'}>
                {'replyUser' in data && data.replyUser !== null && (
                  <>
                    <Text className={'mx-1'}>回复</Text>
                    <Text className={'text-primary'}>
                      {data.replyUser.username} :
                    </Text>
                  </>
                )}

                <EmojiableText body={data.body} />
              </View>

              <View className={'my-2'}>
                <AutoSizeImageList imgs={data.imgs} />
              </View>

              <View className={'my-2 flex flex-row justify-between'}>
                <TimeText time={data.createAt}></TimeText>
                <View className={'flex flex-row'}>
                  <MaterialCommunityIcons
                    name={'chat-outline'}
                    size={16}
                    color={theme.colors.surfaceVariant}
                    style={{ marginRight: 10 }}
                  />
                  <CommentItemIsLike data={data} mutation={mutation} />
                </View>
              </View>
              {isRenderReply && 'replies' in data && data?.replies?.length ? (
                <>
                  <ReplyBody data={data as IHoleCommentListItem} />
                </>
              ) : (
                <></>
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableRipple>
  )
}

const CommentItemIsLike = ({
  data,
  mutation,
}: {
  data: IHoleCommentListItem | IHoleReplyListItem
  mutation: UseMutationResult<unknown, unknown, boolean, unknown>
}) => {
  const theme = useTheme()
  const [favoriteCount, setFavoriteCount] = useState(data.favoriteCount)
  const [isLike, setIsLike] = useState(data.isLiked)

  const onLikeIconPress = () => {
    setIsLike((prev) => !prev)
    setFavoriteCount((prev) => (isLike ? prev - 1 : prev + 1))
    mutation.mutate(isLike, {
      onError() {
        setFavoriteCount((prev) => prev - 1)
      },
    })
  }
  const likedInput = useDerivedValue(() => withSpring(isLike ? 1 : 0), [isLike])

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            likedInput.value,
            [0, 1],
            [1, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    }
  })

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: likedInput.value,
        },
      ],
      opacity: likedInput.value,
    }
  })

  return (
    <Pressable onPress={onLikeIconPress}>
      <View className={'flex flex-row items-center space-x-1'}>
        <View className={'relative p-2 flex-row'}>
          <Animated.View
            className={'flex-row space-x-1 items-center'}
            style={[StyleSheet.absoluteFillObject, outlineStyle]}
          >
            <MaterialCommunityIcons
              name={'heart-outline'}
              size={16}
              color={theme.colors.surfaceVariant}
            />
          </Animated.View>
          <Animated.View
            className={'flex-row space-x-1 items-center'}
            style={[StyleSheet.absoluteFillObject, fillStyle]}
          >
            <MaterialCommunityIcons
              name={'heart'}
              size={16}
              color={theme.colors.error}
            />
          </Animated.View>
        </View>
        <SecondaryText
          variant={'bodySmall'}
          style={{
            color: isLike ? theme.colors.error : theme.colors.surfaceVariant,
          }}
        >
          {favoriteCount}
        </SecondaryText>
      </View>
    </Pressable>
  )
}
