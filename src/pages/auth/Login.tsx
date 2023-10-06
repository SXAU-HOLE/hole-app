import { View, Text } from 'react-native'
import React from 'react'
import AuthView from './AuthView'
import { HelperText, TextInput, useTheme } from 'react-native-paper'

const LoginForm = () => {
  const theme = useTheme()

  return (
    <View>
      <View>
        <TextInput
          label={'学号'}
          mode="outlined"
          outlineColor="#CCD6E3"
          placeholderTextColor={theme.colors.surfaceVariant}
          error={false}
        ></TextInput>
        <HelperText type="error">请输入学号</HelperText>
      </View>
    </View>
  )
}

const Login = () => {
  return (
    <AuthView>
      <LoginForm></LoginForm>
    </AuthView>
  )
}

export default Login
