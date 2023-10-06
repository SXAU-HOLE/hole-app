import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Layout from '@/layouts/layout'
import PaperProvider from '@/shared/providers/paper'

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </PaperProvider>
  )
}
