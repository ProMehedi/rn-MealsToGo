import React, { useContext, useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import styled from 'styled-components/native'

import { LocationContext } from '../../../services/location/location.context'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import Search from '../components/search.component'

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`

const MapScreen = () => {
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
            />
          )
        })}
      </Map>
    </>
  )
}

export default MapScreen
