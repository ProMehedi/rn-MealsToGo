import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'

import { Restaurants } from './restaurants.screen.style'
import RestaurantCard from '../components/restaurant.card.component'
import Spacer from '../../../components/spacer/Spacer'
import SafeArea from '../../../utils/SafeArea'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import Loader from '../../../components/Loader'
import Search from '../components/search.component'
import { FavouritesContext } from '../../../services/favourites/favourites.context'
import FavouritesBar from '../../../components/favourites/favourites-bar.component'

const RestaurantsScreen = ({ navigation }) => {
  const [isToggled, setIsToggled] = useState(true)
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)
  const { favourites } = useContext(FavouritesContext)

  return (
    <SafeArea>
      {isLoading && <Loader size="large" />}
      <Search
        isToggled={isToggled}
        onToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
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
