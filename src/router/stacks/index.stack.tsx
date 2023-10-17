import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation";
import {createMaterialTopTabNavigator, MaterialTopTabBarProps} from "@react-navigation/material-top-tabs";
import HoleHot from "@/pages/hole/HoleHot";
import HoleList from "@/pages/hole/list";
import React from "react";
import {Appbar, useTheme} from "react-native-paper";
import {Pressable, Text, View} from "react-native";
import Animated, {useAnimatedStyle, useDerivedValue, withTiming} from "react-native-reanimated";

const IndexStack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

const TopTabBar: React.FC<MaterialTopTabBarProps> = ({state, jumpTo}) => {
    const handlePress = (route: string) => {
        jumpTo(route)
    }

    return (
        <Appbar.Header className={'flex justify-between px-5 bg-white'}>
            <View className={'flex flex-row'}>
                <Pressable key={'hot'} onPress={() => handlePress('hot')}>
                    <TabBarItem name={'时间轴'} isFocused={state.index === 0}></TabBarItem>
                </Pressable>
                <Text className={'mx-1 text-2xl text-primary'}>/</Text>
                <Pressable key={'latest'} onPress={() => handlePress('latest')}>
                    <TabBarItem name={'随机漫步'} isFocused={state.index === 1}></TabBarItem>
                </Pressable>
            </View>
            <Appbar.Action icon="magnify" onPress={() => {
            }}/>
        </Appbar.Header>
    )
}
const TabBarItem = ({isFocused, name}: {
    isFocused: boolean
    name: string
}) => {
    const theme = useTheme()

    const Animation = {
        active: {
            color: theme.colors.primary,
            fontSize: 24
        },
        inactive: {
            color: '#E9FCD4',
            fontSize: 16
        }
    }

    const color = useDerivedValue(
        () => (isFocused ? Animation.active.color : Animation.active.color),
        [isFocused]
    )

    const fontSize = useDerivedValue(
        () => (isFocused ? Animation.active.fontSize : Animation.inactive.fontSize),
        [isFocused]
    )

    const style = useAnimatedStyle(() => ({
        fontSize: withTiming(fontSize.value),
        color: withTiming(color.value),
        fontWeight: isFocused ? 'bold' : 'normal'
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
            <TopTab.Screen name={'latest'} component={HoleList}></TopTab.Screen>
            <TopTab.Screen name={'hot'} component={HoleHot}></TopTab.Screen>
        </TopTab.Navigator>
    )
}

export function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={'home'} component={TopTabs}></Tab.Screen>
        </Tab.Navigator>
    )
}

export function IndexStacks() {

    return (
        <IndexStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <IndexStack.Screen name={'Index'} component={TopTabs}></IndexStack.Screen>
        </IndexStack.Navigator>
    )
}
