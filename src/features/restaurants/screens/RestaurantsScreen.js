import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'

import { Restaurants, SearchWrap } from './RestaurantsScreen.style'
import RestaurantCard from '../components/RestaurantCard'
import Spacer from '../../../components/spacer/Spacer'
import SafeArea from '../../../utils/SafeArea'

const RestaurantsScreen = () => {
  const [query, setQuery] = useState('')

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
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <RestaurantCard />}
        keyExtractor={(item) => item.toString()}
        ItemSeparatorComponent={() => <Spacer position="bottom" size="large" />}
      />
    </SafeArea>
  )
}

export default RestaurantsScreen
