import React from 'react'
import { Text } from 'react-native'

import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack'
import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen'
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurant.detail.screen'

const RestaurantsNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS
      }}
    >
      <Stack.Screen name="Restaurant" component={RestaurantsScreen} />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default RestaurantsNavigator
