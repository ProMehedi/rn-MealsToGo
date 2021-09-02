import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import CompactRestaurantInfo from '../restaurents/compact-restaurant-info.component'
import Spacer from '../spacer/Spacer'

const Root = styled.View`
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
  padding-top: 0px;
  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.3;
  shadow-radius: 3px;
  elevation: 1;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.brand.muted};
  background-color: #fff;
  overflow: hidden;
`
const Title = styled.Text`
  margin-bottom: ${(props) => props.theme.space[1]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`

const NotFound = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space[4]} ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.disabled};
`

const FavouritesBar = ({ favourites, onNavigate }) => {
  return (
    <Root>
      <Title>Favourites</Title>
      {favourites.length > 0 ? (
        <ScrollView horizontal>
          {favourites.map((favourite, index) => (
            <Spacer position="right" key={index}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate('RestaurantDetail', { restaurant: favourite })
                }
              >
                <CompactRestaurantInfo restaurant={favourite} />
              </TouchableOpacity>
            </Spacer>
          ))}
        </ScrollView>
      ) : (
        <NotFound>
          <Title>No favourites yet</Title>
        </NotFound>
      )}
    </Root>
  )
}

export default FavouritesBar
