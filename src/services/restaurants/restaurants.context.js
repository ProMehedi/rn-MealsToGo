import React, { createContext, useEffect, useState } from 'react'
import { restaurantsRequest, restaurantsTransform } from './restaurants.service'

export const RestaurantsContext = createContext()

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchRestaurants = async () => {
    setIsLoading(true)
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false)
          setRestaurants(results)
        })
        .catch((err) => {
          setIsLoading(false)
          setError(err)
        })
    }, 2000)
  }

  useEffect(() => {
    fetchRestaurants()
  }, [restaurants])

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  )
}
