import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Layout from '@/layouts/layout'
import PaperProvider from '@/shared/providers/paper'
import { Provider } from 'react-redux'
import { ReactQueryProvider } from '@/shared/providers/react-query'
import { persistor, store } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import { CommentContext } from '@/shared/context/CommentContext'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReactQueryProvider>
          <PaperProvider>
            <NavigationContainer>
              <Layout />
            </NavigationContainer>
          </PaperProvider>
        </ReactQueryProvider>
      </PersistGate>
    </Provider>
  )
}
