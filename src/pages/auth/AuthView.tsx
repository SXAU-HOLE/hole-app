import { Text, View } from 'react-native'
import React, { ReactNode, useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import Alert from '@/components/Alert'
import { KeyboardAvoidingView, ScrollView } from 'native-base'

interface IProps {
  children: ReactNode
  desc?: string
  content?: string
}

const useImportFont = () => {
  SplashScreen.preventAutoHideAsync()

  const [fontsLoaded] = useFonts({
    Youshebiaotihei: require('../../../assets/fonts/YouSheBiaoTiHei.ttf'),
  })

  const FontLoadedView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null
  else return FontLoadedView
}

const AuthView: React.FC<IProps> = ({ children, desc, content }) => {
  const isLayout = useImportFont()

  if (!isLayout) {
    return
  }

  return (
    <View onLayout={isLayout} className={'flex-1 '}>
      <View className="py-[10px] px-5 bg-white h-full">
        <KeyboardAvoidingView behavior={'position'}>
          <ScrollView>
            <View className="mt-14">
              <Text className="font-[Youshebiaotihei] text-2xl color-primary">
                欢迎来到
              </Text>
              <Text className="font-[Youshebiaotihei] text-2xl color-primary">
                农大人自己的小世界
              </Text>
              <Text className="text-gray-500">
                {desc || '请输入你的学号和密码'}
              </Text>
            </View>

            <View className="mt-10">
              <Alert
                title={
                  content ||
                  '密码为注册设置的密码哦，第一次来可以点击下方的注册按钮~'
                }
                type="success"
              ></Alert>
            </View>

            <View className="mt-10">{children}</View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}

export default AuthView
