import React, { useContext, useState } from 'react'
import { ActivityIndicator, Searchbar } from 'react-native-paper'

import { Restaurants, SearchWrap } from './restaurants.screen.style'
import RestaurantCard from '../components/restaurant.card.component'
import Spacer from '../../../components/spacer/Spacer'
import SafeArea from '../../../utils/SafeArea'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'

const RestaurantsScreen = () => {
  const [query, setQuery] = useState('')

  const { restaurants, isLoading, error } = useContext(RestaurantsContext)

  return (
    <SafeArea>
      {isLoading && <ActivityIndicator animating={true} />}
      <SearchWrap>
        <Searchbar
          placeholder="Search Here"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
      </SearchWrap>
      <Restaurants
        data={restaurants}
        renderItem={({ item }) => <RestaurantCard restaurant={item} />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Spacer position="bottom" size="large" />}
      />
    </SafeArea>
  )
}

export default RestaurantsScreen
