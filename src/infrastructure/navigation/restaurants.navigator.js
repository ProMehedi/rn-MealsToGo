import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen'
import { Text } from 'react-native'

const RestaurantsDetail = () => {
  return <Text>Restaurant Detail</Text>
}

const RestaurantsNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Restaurant"
        component={RestaurantsScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantsDetail}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default RestaurantsNavigator
