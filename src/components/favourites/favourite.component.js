import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { FavouritesContext } from '../../services/favourites/favourites.context'

const Root = styled(TouchableOpacity)`
  position: absolute;
  top: ${(props) => props.theme.space[2]};
  right: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.ui.quaternary};
  font-size: ${(props) => props.theme.fontSizes.body};
  z-index: 1;
`

const Favourite = ({ restaurant }) => {
  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouritesContext)

  // const isFavourite = favourites.find((r) => r.placeid === restaurant.placeid)
  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId)

  return (
    <Root
      onPress={() =>
        !isFavourite ? addFavourite(restaurant) : removeFavourite(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? 'heart' : 'hearto'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </Root>
  )
}

export default Favourite
