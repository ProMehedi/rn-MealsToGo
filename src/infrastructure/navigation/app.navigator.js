import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import SafeArea from '../../utils/SafeArea'
import RestaurantsNavigator from './restaurants.navigator'
import MapScreen from '../../features/maps/screens/map.screen'

const Settings = () => (
  <SafeArea>
    <Text>Settings Screen</Text>
  </SafeArea>
)

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Restaurants: 'md-restaurant',
              Maps: 'md-map',
              Settings: 'md-settings'
            }
            return (
              <Ionicons name={icons[route.name]} color={color} size={size} />
            )
          },
          headerShown: false,
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'gray'
        })}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Maps" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
