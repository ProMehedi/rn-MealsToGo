import camelize from 'camelize'
import { locations } from './location.mock'

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm]
    if (!locationMock) {
      reject('Location not found')
    }
    resolve(locationMock)
  })
}

export const locationTransform = (result) => {
  const location = camelize(result.results)[0]
  console.log(location)
}
