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
}

const VoteItem = ({
  item,
  active,
  onPress,
  index,
  disabled,
  totalCount,
}: VoteItemProps) => {
  const theme = useTheme()
  const itemStyle = useMemo(() => {
    let base =
      'bg-white h-10 px-2 my-1 rounded-lg flex flex-row items-center box-border '

    const activeStyle = 'border-border border-[0.5px]'

    if (active) {
      base += activeStyle
    }

    return base
  }, [disabled, active])
  const [itemWidth, setItemWidth] = useState(0)
  const percent = useMemo(() => {
    return +(item.count / totalCount).toFixed(2)
  }, [totalCount])
  const width = useDerivedValue(() => {
    return itemWidth * percent
  }, [itemWidth])

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, { duration: 1000 }),
      backgroundColor: theme.colors.primary,
    }
  })

  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View
        className={itemStyle}
        onLayout={(e) => setItemWidth(e.nativeEvent.layout.width)}
      >
        <View className={'flex flex-row w-full justify-between'}>
          <Text className={`${active && 'color-border'}`}>
            {index}. {item.option}
          </Text>

          {disabled && (
            <Text className={`${active && 'color-border'}`}>
              {(percent * 100).toFixed(0)}%
            </Text>
          )}
        </View>

        {disabled && (
          <Animated.View
            style={[progressStyle]}
            className={'absolute h-full opacity-30 rounded-lg'}
          />
        )}
      </View>
    </Pressable>
  )
}

const Vote = ({ vote }: { vote: Vote }) => {
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
    mutationKey: [vote.id],
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
            active={!item.isVoted && selectedItems.includes(item.id)}
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
