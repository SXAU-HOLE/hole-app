import { StatusBar, View } from 'react-native'
import React from 'react'
import { Routes } from '@/router/routes'
import Toast from 'react-native-toast-message'

const layout = () => {
  return (
    <View className={'min-h-[100vh] w-screen'}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#7b1fa2'}
      ></StatusBar>
      <Routes></Routes>
      <Toast></Toast>
    </View>
  )
}

export default layout
