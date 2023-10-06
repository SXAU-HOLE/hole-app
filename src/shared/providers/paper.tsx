import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { Provider } from 'react-native-paper'
import { colors } from '@/shared/theme/colors'

const PaperProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider
      theme={{
        colors,
      }}
    >
      {children}
    </Provider>
  )
}

export default PaperProvider
