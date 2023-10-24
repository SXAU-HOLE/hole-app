import { FlatList, Text, View } from 'react-native'
import { ReplyBottomSheet } from '@/pages/hole/components/reply/ReplyBottomSheet'
import { useReplyList } from '@/query/hole'
import { CommentItem } from '@/pages/hole/components/detail/CommentItem'
import { useTheme } from 'react-native-paper'
import { Loading } from '@/components/Loading'
import { DetailBottom } from '@/pages/hole/components/detail/DetailBottom'
import { LoadMore } from '@/components/LoadMore'
import React from 'react'

export function ReplyList({
  open,
  onClose,
  commentId,
}: {
  open: boolean
  onClose: () => void
  commentId: string
}) {
  const { flattenData, isSuccess, isLoading, hasNextPage, fetchNextPage } =
    useReplyList(commentId)
  const theme = useTheme()
  const { data: transform } = flattenData
  const data = transform?.flat(1)

  const onLoadMore = async () => {
    if (!hasNextPage) return

    await fetchNextPage()
  }

  if (!isSuccess) {
    return <View />
  }

  return (
    <ReplyBottomSheet isOpen={open} onClose={onClose}>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <View className={'h-full'}>
          <View className={'flex flex-row space-x-3 px-3 py-5'}>
            <Text>全部回复</Text>
            <Text style={{ color: theme.colors.surfaceVariant }}>
              共 {data.length} 条
            </Text>
          </View>
          <View>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <CommentItem key={index} data={item} />
              )}
              ListFooterComponent={() => (
                <>
                  <LoadMore
                    text={'没有更多回复了哦'}
                    hasNextPage={hasNextPage}
                  ></LoadMore>
                  <View className={'mt-20 bg-transparent'}></View>
                </>
              )}
              onEndReachedThreshold={0.1}
              onEndReached={onLoadMore}
              showsVerticalScrollIndicator={false}
            ></FlatList>
          </View>
        </View>
      )}
    </ReplyBottomSheet>
  )
}
