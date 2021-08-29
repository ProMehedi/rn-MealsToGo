import React from 'react'

import SafeArea from '../../../utils/SafeArea'
import RestaurantCard from '../components/restaurant.card.component'

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params
  return (
    <SafeArea>
      <RestaurantCard restaurant={restaurant} />
    </SafeArea>
  )
}

export default RestaurantDetailScreen
