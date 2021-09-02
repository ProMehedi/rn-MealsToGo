import React, { useContext, useEffect, useState } from 'react'
import { StatusBar, View } from 'react-native'
import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/location/location.context'

export const Root = styled(View)`
  position: absolute;
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
  z-index: 9;
  top: ${StatusBar.currentHeight || 0}px;
`

const Search = () => {
  const { keyword, search } = useContext(LocationContext)
  const [query, setQuery] = useState(keyword)

  useEffect(() => {
    setQuery(keyword)
  }, [keyword])

  return (
    <Root>
      <Searchbar
        placeholder="Search location (Chicago)"
        icon="map"
        value={query}
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={() => search(query)}
      />
    </Root>
  )
}

export default Search
