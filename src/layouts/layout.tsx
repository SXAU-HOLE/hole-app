import { View } from 'react-native'
import React from 'react'
import { Routes } from '@/router/routes'

const layout = () => {
  return (
    <View className={'min-h-[100vh] w-screen'}>
      <Routes></Routes>
    </View>
  )
}

export default layout
