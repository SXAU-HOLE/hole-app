import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Layout from '@/layouts/layout'
import PaperProvider from '@/shared/providers/paper'
import { Provider } from 'react-redux'
import store from '@/store'

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Layout />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}
