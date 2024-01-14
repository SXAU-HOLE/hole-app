import { Pressable, Text, View } from 'react-native'
import { useCallback, useMemo, useState } from 'react'
import { Button, useTheme } from 'react-native-paper'
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import { useMutation } from '@tanstack/react-query'
import { PostHoleVoteRequest } from '@/apis/vote'
import { Toast } from '@/utils/toast'

export enum VoteTypeMap {
  // 单选
  single = '单选',

  // 多选
  multiple = '多选',
}

interface VoteItemProps {
  item: VoteItem
  onPress: () => void
  index: number
  disabled: boolean
  active: boolean
  totalCount: number
  progress: boolean
}

const VoteItem = ({
  item,
  active,
  onPress,
  index,
  disabled,
  totalCount,
  progress,
}: VoteItemProps) => {
  const theme = useTheme()
  const isActive = useMemo(
    () => active || (progress && item.isVoted),
    [active, progress, item.isVoted],
  )
  const itemStyle = useMemo(() => {
    let base =
      'w-full bg-white h-10 px-2 my-1 rounded-lg flex flex-row items-center box-border '

    const activeStyle = 'border-border border-[0.5px]'

    if (isActive) {
      base += activeStyle
    }

    return base
  }, [disabled, active])

  const [itemWidth, setItemWidth] = useState(0)
  const percent = useMemo(() => {
    if (totalCount !== 0) {
      return +(item.count / totalCount).toFixed(2)
    } else {
      return 0
    }
  }, [item.count, totalCount])
  const width = useDerivedValue(() => {
    return itemWidth * percent
  }, [itemWidth, percent])

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, { duration: 1000 }),
      backgroundColor: item.isVoted
        ? theme.colors.primary
        : theme.colors.surfaceVariant,
    }
  })

  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View
        className={itemStyle}
        onLayout={(e) => setItemWidth(e.nativeEvent.layout.width)}
      >
        <View className={'flex flex-row w-full justify-between'}>
          <Text className={`${isActive && 'color-border'}`}>
            {index}. {item.option}
          </Text>

          {disabled && (
            <Text className={`${isActive && 'color-border'}`}>
              {(percent * 100).toFixed(0)}%
            </Text>
          )}
        </View>

        {progress && (
          <Animated.View
            style={[progressStyle]}
            className={'absolute h-full opacity-30 rounded-lg'}
          />
        )}
      </View>
    </Pressable>
  )
}

const Vote = ({ vote: initialVote }: { vote: Vote }) => {
  const [vote, setVote] = useState(initialVote)
  const [selectedItems, setSelected] = useState<number[]>([])

  const handleItem = useCallback((itemId: number) => {
    if (vote.type === 'multiple') {
      setSelected((prevSelected) =>
        prevSelected.includes(itemId)
          ? prevSelected.filter((item) => item !== itemId)
          : [...prevSelected, itemId],
      )
    } else {
      setSelected([itemId])
    }
  }, [])

  const mutate = useMutation({
    // @ts-ignore
    mutationKey: [vote.id, vote.isVoted],
    mutationFn: (ids: number[]) => {
      PostHoleVoteRequest({
        id: vote.id,
        ids: ids,
      })
    },
    onSuccess() {
      Toast.success({
        text1: '投票成功',
      })
    },
  })

  const submit = (ids: number[]) => {
    mutate.mutate(ids)

    setVote((prevVote) => {
      const updatedVote = {
        ...prevVote,
        isVoted: 1,
        totalCount: prevVote.totalCount + 1,
      }

      // 更新 vote.items 数组中与 ids 数组中的项目具有相同 ID 的项
      updatedVote.items = prevVote.items.map((item) => {
        if (ids.includes(item.id)) {
          return { ...item, isVoted: 1, count: item.count + 1 }
        }
        return item
      })

      return updatedVote
    })
  }

  return (
    <View
      className={
        'flex flex-col space-y-2 bg-onBackground/40 w-full rounded-lg p-2'
      }
    >
      <View>
        <Text className={'font-semibold text-lg'}>
          {vote?.title || '标题'} &nbsp; ( {VoteTypeMap[vote.type]} )
        </Text>
        <Text className={'color-gray-500'}>共{vote.totalCount}人参与</Text>
      </View>

      <View>
        {vote.items.map((item, index) => (
          <VoteItem
            key={item.id}
            index={index}
            item={item}
            active={selectedItems.includes(item.id)}
            progress={!!item.isVoted}
            onPress={() => handleItem(item.id)}
            disabled={!!vote.isVoted}
            totalCount={vote.totalCount}
          />
        ))}
      </View>

      {!vote.isVoted && selectedItems.length && (
        <View>
          <Button onPress={() => submit(selectedItems)}>提交</Button>
        </View>
      )}
    </View>
  )
}

export default Vote
