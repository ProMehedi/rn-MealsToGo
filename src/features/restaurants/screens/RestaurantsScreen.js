import React, { useState } from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'
import RestaurantInfo from '../components/RestaurantCard'

const Root = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  margin-top: ${StatusBar.currentHeight || 0}px;
`

const SearchWrap = styled(View)`
  padding: 15px;
  background-color: #fff;
`

const Content = styled(View)`
  flex: 1;
  padding: 15px;
  background-color: #f0f0f0;
`

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
