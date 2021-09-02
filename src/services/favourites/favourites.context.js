import React, { useState } from 'react'

export const FavouritesContext = React.createContext()

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([])

  const addFavourite = (favourite) => {
    setFavourites([...favourites, favourite])
  }

  const removeFavourite = (favourite) => {
    setFavourites(favourites.filter((f) => f.placeid !== favourite.placeid))
  }

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}
