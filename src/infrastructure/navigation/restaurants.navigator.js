import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen'

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
    </Stack.Navigator>
  )
}

export default RestaurantsNavigator
