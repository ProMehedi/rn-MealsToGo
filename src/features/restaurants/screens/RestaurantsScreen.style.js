import { FlatList, View } from 'react-native'
import styled from 'styled-components/native'

export const SearchWrap = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`

export const Restaurants = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`
