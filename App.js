import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme/index'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'
import { Navigation } from './src/infrastructure/navigation'
import { FavouritesContextProvider } from './src/services/favourites/favourites.context'

const App = () => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })
  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}

export default App
