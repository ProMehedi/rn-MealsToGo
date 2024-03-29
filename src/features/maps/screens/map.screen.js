import React, { useContext, useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import styled from 'styled-components/native'
import CompactRestaurantInfo from '../../../components/restaurents/compact-restaurant-info.component'

import { LocationContext } from '../../../services/location/location.context'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import MapCallout from '../components/map.callout.component'
import Search from '../components/search.component'

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`

const MapScreen = ({ navigation }) => {
  const [latDelta, setLatDelta] = useState('')

  const { location } = useContext(LocationContext)
  const { restaurants = [] } = useContext(RestaurantsContext)

  const { lat, lng, viewport } = location

  useEffect(() => {
    const northeastLat = viewport.northeast.lat
    const southwestLat = viewport.southwest.lat

    setLatDelta(northeastLat - southwestLat)
  }, [viewport])

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: Number(latDelta),
          longitudeDelta: 0.02
        }}
      >
        {restaurants.map((restaurant, i) => {
          return (
            <MapView.Marker
              key={i}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetail', { restaurant })
                }
              >
                <CompactRestaurantInfo callout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          )
        })}
      </Map>
    </>
  )
}

export default MapScreen
