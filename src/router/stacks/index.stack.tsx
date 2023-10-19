import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs'
import HoleHot from '@/pages/hole/HoleHot'
import React from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import { Pressable, Text, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import { HoleLatest } from '@/pages/hole/HoleLatest'
import HoleStacks from '@/router/stacks/hole.stack'
import { useLinkTo } from '@react-navigation/native'

const IndexStack = createNativeStackNavigator()
const TopTab = createMaterialTopTabNavigator()

const TopTabBar: React.FC<MaterialTopTabBarProps> = ({ state, jumpTo }) => {
  const theme = useTheme()
  const linkTo = useLinkTo()
  const handlePress = (route: string) => {
    jumpTo(route)
  }

  return (
    <Appbar.Header
      className={'flex justify-between px-5 bg-transparent h-12'}
      style={{ backgroundColor: theme.colors.background }}
    >
      <View className={'flex flex-row'}>
        <Pressable key={'hot'} onPress={() => handlePress(state.routes[0].key)}>
          <TabBarItem
            name={'时间轴'}
            isFocused={state.index === 0}
          ></TabBarItem>
        </Pressable>
        <Text className={'mx-1 text-2xl text-primary'}>
          {state.index === 0 ? '\\' : '/'}
        </Text>
        <Pressable
          key={'latest'}
          onPress={() => handlePress(state.routes[1].key)}
        >
          <TabBarItem
            name={'随机漫步'}
            isFocused={state.index === 1}
          ></TabBarItem>
        </Pressable>
      </View>
      <Appbar.Action icon="magnify" onPress={() => linkTo('/hole/search')} />
    </Appbar.Header>
  )
}
const TabBarItem = ({
  isFocused,
  name,
}: {
  isFocused: boolean
  name: string
}) => {
  const theme = useTheme()

  const Animation = {
    active: {
      color: theme.colors.primary,
      fontSize: 24,
    },
    inactive: {
      color: '#E9FCD4',
      fontSize: 16,
    },
  }

  const color = useDerivedValue(
    () => (isFocused ? Animation.active.color : Animation.active.color),
    [isFocused],
  )

  const fontSize = useDerivedValue(
    () => (isFocused ? Animation.active.fontSize : Animation.inactive.fontSize),
    [isFocused],
  )

  const style = useAnimatedStyle(() => ({
    fontSize: withTiming(fontSize.value),
    color: withTiming(color.value),
    fontWeight: isFocused ? 'bold' : 'normal',
  }))

  return (
    <View>
      <Animated.Text style={style}>{name}</Animated.Text>
    </View>
  )
}

export function TopTabs() {
  return (
    <TopTab.Navigator tabBar={TopTabBar}>
      <TopTab.Screen name={'latest'} component={HoleLatest}></TopTab.Screen>
      <TopTab.Screen name={'hot'} component={HoleHot}></TopTab.Screen>
    </TopTab.Navigator>
  )
}

export function IndexStacks() {
  const theme = useTheme()

  return (
    <IndexStack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: theme.colors.background,
        statusBarStyle: 'dark',
      }}
    >
      <IndexStack.Screen name={'Index'} component={TopTabs}></IndexStack.Screen>
      <IndexStack.Screen
        name={'hole'}
        component={HoleStacks}
      ></IndexStack.Screen>
    </IndexStack.Navigator>
  )
}
