import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme/index'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}

export default App
