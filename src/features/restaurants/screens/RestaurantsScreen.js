import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'

import { Content, Root, SearchWrap } from './RestaurantsScreen.style'
import RestaurantInfo from '../components/RestaurantCard'

const RestaurantsScreen = () => {
  const [query, setQuery] = useState('')

  return (
    <Root>
      <SearchWrap>
        <Searchbar
          placeholder="Search Here"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
      </SearchWrap>
      <Content>
        <RestaurantInfo />
      </Content>
    </Root>
  )
}

export default RestaurantsScreen
