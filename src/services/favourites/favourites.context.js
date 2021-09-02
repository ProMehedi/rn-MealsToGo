import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const FavouritesContext = createContext()

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([])

  const saveFavourites = async (value) => {
    try {
      await AsyncStorage.setItem('@favourites', JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  const getFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favourites')
      setFavourites(value ? JSON.parse(value) : [])
    } catch (error) {
      console.log(error)
    }
  }

  const addFavourite = (restaurant) => {
    setFavourites([...favourites, restaurant])
  }

  const removeFavourite = (restaurant) => {
    setFavourites(favourites.filter((f) => f.placeId !== restaurant.placeId))
  }

  useEffect(() => {
    getFavourites()
  }, [])

  useEffect(() => {
    saveFavourites(favourites)
  }, [favourites])

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}
