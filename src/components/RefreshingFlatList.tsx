import { View, Text, FlatList, FlatListProps } from 'react-native'
import React, { forwardRef, useEffect, useState } from 'react'
import { Func } from '@/shared/types'
import { MyRefreshControl } from '@/components/RefreshControl'

type Props<T> = {
  onTopRefresh?: Func
  fetchNextPage?: Func
  hasNextPage?: boolean
} & FlatListProps<T>

const RefreshingFlatListInner = <T = any,>(
  props: Props<T>,
  ref: React.Ref<FlatList>,
) => {
  const [refreshing, setRefreshing] = useState(!!props.refreshing)

  useEffect(() => {
    setRefreshing(!!props.refreshing)
  }, [props.refreshing])

  const onLoadMore = async () => {
    if (!props.hasNextPage) return

    await props.fetchNextPage?.()
  }

  return (
    <FlatList
      ref={ref}
      onScroll={props.onScroll}
      onEndReachedThreshold={0.1}
      onEndReached={onLoadMore}
      refreshing={refreshing}
      refreshControl={
        props.onTopRefresh && (
          <MyRefreshControl
            refreshing={refreshing}
            onRefresh={props.onTopRefresh}
          />
        )
      }
      showsVerticalScrollIndicator={false} // 隐藏进度条
      {...props}
    ></FlatList>
  )
}

const RefreshingFlatList = forwardRef(RefreshingFlatListInner) as <T = any>(
  props: Props<T> & { ref?: React.Ref<FlatList> },
) => React.JSX.Element

export default RefreshingFlatList
