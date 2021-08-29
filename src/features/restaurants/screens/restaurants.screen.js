import React, { useContext } from 'react'

import { Restaurants } from './restaurants.screen.style'
import RestaurantCard from '../components/restaurant.card.component'
import Spacer from '../../../components/spacer/Spacer'
import SafeArea from '../../../utils/SafeArea'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import Loader from '../../../components/Loader'
import Search from '../components/search.component'
import { Pressable } from 'react-native'

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)

  return (
    <SafeArea>
      {isLoading && <Loader size="large" />}
      <Search />
      <Restaurants
        data={restaurants}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('RestaurantDetail')}>
            <RestaurantCard restaurant={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Spacer position="bottom" size="large" />}
      />
    </SafeArea>
  )
}

export default RestaurantsScreen
