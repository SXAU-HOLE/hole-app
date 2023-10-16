import { View, Text, SafeAreaView, StatusBar, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from 'react-native-paper'
import Page from '@/components/Page'
import { useQuery } from '@tanstack/react-query'
import { GetHoleListRequest } from '@/apis/hole'
import { HoleListMode } from '@/shared/enum'
import { HoleInfo } from './components/HoleList'

const HoleList = () => {
  const theme = useTheme()

  const { data, isSuccess } = useQuery({
    queryKey: ['hole'],
    queryFn: () =>
      GetHoleListRequest({ limit: 10, page: 1, mode: HoleListMode.hot }),
  })

  return (
    <Page>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View className="flex">
        <Text className="h-16">Header</Text>
      </View>

      <View>
        {isSuccess && (
          <FlatList
            data={data?.items}
            renderItem={({ item }) => <HoleInfo data={item}></HoleInfo>}
          ></FlatList>
        )}
      </View>
    </Page>
  )
}

export default HoleList
