import React, { useContext, useState } from 'react'
import { Searchbar } from 'react-native-paper'

import { Restaurants, SearchWrap } from './restaurants.screen.style'
import RestaurantCard from '../components/restaurant.card.component'
import Spacer from '../../../components/spacer/Spacer'
import SafeArea from '../../../utils/SafeArea'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'

const RestaurantsScreen = () => {
  const [query, setQuery] = useState('')

  const restaurantsContext = useContext(RestaurantsContext)

  return (
    <SafeArea>
      <SearchWrap>
        <Searchbar
          placeholder="Search Here"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
      </SearchWrap>
      <Restaurants
        data={restaurantsContext.restaurants}
        renderItem={({ item }) => <RestaurantCard />}
        keyExtractor={(item) => item.toString()}
        ItemSeparatorComponent={() => <Spacer position="bottom" size="large" />}
      />
    </SafeArea>
  )
}

export default RestaurantsScreen
