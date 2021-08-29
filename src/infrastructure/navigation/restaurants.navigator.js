import React from 'react'
import { Text } from 'react-native'

import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack'
import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen'

const RestaurantsDetail = () => {
  return <Text>Restaurant Detail</Text>
}

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
      <Stack.Screen name="RestaurantDetail" component={RestaurantsDetail} />
    </Stack.Navigator>
  )
}

export default RestaurantsNavigator
