import { FlatList, SafeAreaView, StatusBar, View } from 'react-native'
import styled from 'styled-components/native'

export const Root = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-top: ${StatusBar.currentHeight || 0}px;
`

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
