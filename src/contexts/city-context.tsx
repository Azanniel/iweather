import { ReactNode, createContext, useEffect, useState } from 'react'
import {
  City,
  getStorageCity,
  saveStorageCity,
} from '@/libs/storage/city-storage'

interface CityContextType {
  cityIsLoading: boolean
  city: City | null
  handleChanceCity: (city: City) => void
}

const CityContext = createContext<CityContextType>({} as CityContextType)

interface CityProviderProps {
  children: ReactNode
}

function CityProvider({ children }: CityProviderProps) {
  const [city, setCity] = useState<City | null>(null)
  const [cityIsLoading, setCityIsLoading] = useState(true)

  async function handleChanceCity(selectedCity: City) {
    setCityIsLoading(true)

    await saveStorageCity(selectedCity)

    setCity(selectedCity)
    setCityIsLoading(false)
  }

  useEffect(() => {
    setCityIsLoading(true)

    getStorageCity()
      .then((city) => setCity(city))
      .finally(() => setCityIsLoading(false))
  }, [])

  return (
    <CityContext.Provider
      value={{
        city,
        cityIsLoading,
        handleChanceCity,
      }}
    >
      {children}
    </CityContext.Provider>
  )
}

export { CityContext, CityProvider }
