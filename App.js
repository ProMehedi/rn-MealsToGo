import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen'

const App = () => {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  )
}

export default App
