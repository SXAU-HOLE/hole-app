import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { Button, useTheme } from 'react-native-paper'
import { useAuth } from '@/hooks/auth'
import Page from '@/components/Page'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { GetHoleListRequest } from '@/apis/hole'
import { HoleListMode } from '@/shared/enum'

const HoleCard = () => {}

const HoleList = () => {
  const theme = useTheme()

  // const queryClient = useQueryClient()
  // const query = useQuery({
  //   queryKey: ['hole'],
  //   queryFn: () =>
  //     GetHoleListRequest({ limit: 10, page: 1, mode: HoleListMode.hot }),
  // })

  // const mutation = useMutation({
  //   onSuccess: () => {
  //     // queryClient.invalidateQueries({ queryKey: ['hole'] })
  //     console.log('query', query.data)
  //   },
  //   onError: () => {
  //     console.log('error')
  //   },
  // })

  useEffect(() => {
    async function getData() {
      const data = await GetHoleListRequest({
        limit: 10,
        page: 1,
        mode: HoleListMode.hot,
      })
      console.log(data)
    }
    getData()
  }, [])

  return (
    <Page>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View className=" bg-gray-300">
        <Text className="h-16">Header</Text>
      </View>
      <View>
        <Text></Text>
      </View>
    </Page>
  )
}

export default HoleList
