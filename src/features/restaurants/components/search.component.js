import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/location/location.context'

export const Root = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`

const Search = () => {
  const { keyword, search } = useContext(LocationContext)
  const [query, setQuery] = useState(keyword)

  return (
    <Root>
      <Searchbar
        placeholder="Search location (Chicago)"
        value={query}
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={() => search(query)}
      />
    </Root>
  )
}

export default Search
