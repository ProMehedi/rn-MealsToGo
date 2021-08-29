import React, { createContext, useEffect, useState } from 'react'
import { locationRequest, locationTransform } from './location.service'

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('San Francisco')
  const [location, setLocation] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onSearch = (query) => {
    setIsLoading(true)
    setKeyword(query)
  }

  useEffect(() => {
    if (!keyword.length) {
      setIsLoading(false)
      return
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLocation(result)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }, [keyword])

  return (
    <LocationContext.Provider
      value={{ keyword, search: onSearch, location, isLoading, error }}
    >
      {children}
    </LocationContext.Provider>
  )
}
