import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'

import { Restaurants } from './restaurants.screen.style'
import RestaurantCard from '../components/restaurant.card.component'
import Spacer from '../../../components/spacer/Spacer'
import SafeArea from '../../../utils/SafeArea'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import Loader from '../../../components/Loader'
import Search from '../components/search.component'
import { FavouritesContext } from '../../../services/favourites/favourites.context'

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)
  const { favourites } = useContext(FavouritesContext)

  // console.log(favourites)

  return (
    <SafeArea>
      {isLoading && <Loader size="large" />}
      <Search />
      <Restaurants
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('RestaurantDetail', { restaurant: item })
            }
          >
            <RestaurantCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Spacer position="bottom" size="large" />}
      />
    </SafeArea>
  )
}

export default RestaurantsScreen
