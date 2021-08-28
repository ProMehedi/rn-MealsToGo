import React, { createContext, useEffect, useState } from 'react'
import { locationRequest, locationTransform } from './location.service'

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('san francisco')
  const [location, setLocation] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onSearch = (query) => {
    setIsLoading(true)
    setKeyword(query)
    locationRequest(query.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLocation(result)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    onSearch(keyword)

    console.log(location)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LocationContext.Provider
      value={{ keyword, search: onSearch, location, isLoading, error }}
    >
      {children}
    </LocationContext.Provider>
  )
}
