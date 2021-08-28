import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { Ionicons } from '@expo/vector-icons'

import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme/index'
import SafeArea from './src/utils/SafeArea'
import { Text } from 'react-native'

const Maps = () => (
  <SafeArea>
    <Text>Maps Screen</Text>
  </SafeArea>
)
const Settings = () => (
  <SafeArea>
    <Text>Settings Screen</Text>
  </SafeArea>
)

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

  const Tab = createBottomTabNavigator()

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ color, size }) => {
                const icons = {
                  Restaurants: 'md-restaurant',
                  Maps: 'md-map',
                  Settings: 'md-settings'
                }

                return (
                  <Ionicons
                    name={icons[route.name]}
                    color={color}
                    size={size}
                  />
                )
              }
            })}
            tabBarOptions={{
              activeTintColor: '#e91e63',
              inactiveTintColor: 'gray'
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Maps" component={Maps} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}

export default App
