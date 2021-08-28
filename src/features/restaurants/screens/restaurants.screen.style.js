import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export const Restaurants = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`
