import React, { useCallback } from 'react'
import { StyledView, StyledText, StyledTextInput } from '@/components/Styled'
import { useFonts } from 'expo-font'
import { StyleSheet } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import * as COLORS from '@/shared/constants/COLOR'
import Card from '@/components/Login_SignIn/Card'
import Btn from '@/components/Login_SignIn/Btn'

SplashScreen.preventAutoHideAsync()
export default function LoginScreen() {
  const [fontsLoaded] = useFonts({
    Youshebiaotihei: require('../../assets/fonts/YouSheBiaoTiHei.ttf'),
  })
  const FontLoadedView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return (
    <StyledView className="flex mt-32" onLayout={FontLoadedView}>
      <StyledText className="ml-5" style={styles.headFont}>
        欢迎来到
      </StyledText>
      <StyledText className="ml-5" style={styles.headFont}>
        农大人自己的小世界
      </StyledText>

      <StyledText className="text-gray-500 mb-8 mt-2 ml-5">
        请输入你的账号和密码
      </StyledText>
      <Card content="密码为注册设置的密码哦，第一次来可以点击下方的注册按钮~" />

      <StyledView className="flex flex-column justify-around"></StyledView>

      <StyledView className="flex items-center mx-5 space-y-4">
        <StyledView className="bg-black/5 p-4 rounded-2xl w-full">
          <StyledTextInput
            placeholder="学号"
            className="bg-black/5 p-4 rounded-2xl w-full mb-3 border-2 focus:outline-none border-black/5  focus:border-green-700 focus:ring-1"
          ></StyledTextInput>

          <StyledTextInput
            placeholder="密码"
            className="bg-black/5 p-4 rounded-2xl w-full mb-3 border-2 focus:outline-none border-black/5  focus:border-green-700 focus:ring-1"
          ></StyledTextInput>

          <StyledView className="mt-2 flex flex-row  self-end">
            <StyledText className="mr-2" style={styles.bottomFont}>
              注册
            </StyledText>

            <StyledText className="" style={styles.bottomFont}>
              忘记密码
            </StyledText>
          </StyledView>

          <Btn
            className="mt-4 flex items-center p-3 rounded-full"
            style={{ backgroundColor: COLORS.PRIMARY_COLOR }}
            title="登录"
          />
        </StyledView>
      </StyledView>
    </StyledView>
  )
}

const styles = StyleSheet.create({
  headFont: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: 'Youshebiaotihei',
    fontSize: 24,
    fontWeight: '400',
  },
  bottomFont: {
    color: COLORS.TEXT_COLOR,
    fontWeight: 'bold',
  },
})
