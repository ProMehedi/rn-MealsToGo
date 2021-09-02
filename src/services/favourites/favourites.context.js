import React, { createContext, useState } from 'react'

export const FavouritesContext = createContext()

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([])

  const addFavourite = (restaurant) => {
    setFavourites([...favourites, restaurant])
  }

  const removeFavourite = (restaurant) => {
    setFavourites(favourites.filter((f) => f.placeId !== restaurant.placeId))
  }

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}
