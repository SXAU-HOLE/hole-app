import React, { useCallback, useState } from 'react'
import { StyledView, StyledText, StyledTextInput } from '@/components/Styled'
import { useFonts } from 'expo-font'
import { StyleSheet } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import * as colors from '@/constants/COLOR'
import Card from '@/components/Login_SignIn/Card'
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
    <StyledView className="flex mt-14" onLayout={FontLoadedView}>
      <StyledText className="" style={styles.headFont}>
        欢迎来到
      </StyledText>
      <StyledText className="" style={styles.headFont}>
        农大人自己的小世界
      </StyledText>

      <StyledText className="text-gray-500 mb-8 mt-2">请输入你的账号和密码</StyledText>
        <Card />
        
    </StyledView>
  )
}

const styles = StyleSheet.create({
  headFont: {
    color: colors.PRIMARY_COLOR,
    fontFamily: 'Youshebiaotihei',
    fontSize: 24,
    fontWeight: '400'
  },
})
