import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AutocompleteInput } from '@/components/autocomplete-input'
import { WeatherToday } from '@/components/weather-today'
import { WeatherDetails } from '@/components/weather-details'
import { NextDays } from '@/components/next-days'
import { useCity } from '@/hooks/use-city'
import {
  GetWeatherByCityResponse,
  getWeatherByCity,
} from '@/services/open-weather/get-weather-by-city'
import { City } from '@/libs/storage/city-storage'
import { Loading } from '@/components/loading'
import { getCityByName } from '@/services/open-weather/get-city-by-name'

export default function Dashboard() {
  const [search, setSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [cities, setCities] = useState<City[]>([])
  const [isWeatherLoading, setWeatherIsLoading] = useState(true)
  const [weather, setWeather] = useState<GetWeatherByCityResponse>(
    {} as GetWeatherByCityResponse,
  )

  const { cityIsLoading, city, handleChanceCity } = useCity()

  async function getCities(city: string) {
    setIsSearching(true)

    const response = await getCityByName(city)

    if (response) {
      setCities([response])
    } else {
      setCities([])
    }

    setIsSearching(false)
  }

  function handleSelect(value: City) {
    handleChanceCity(value)
    setSearch('')
    setCities([])
  }

  async function getWeatherDetails(currentCity: City | null) {
    if (!currentCity) {
      return
    }

    setWeatherIsLoading(true)

    const { latitude, longitude } = currentCity
    const response = await getWeatherByCity({ latitude, longitude })

    setWeather(response)
    setWeatherIsLoading(false)
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return
    }

    const debounce = setTimeout(() => getCities(search), 500)

    return () => clearInterval(debounce)
  }, [search])

  useEffect(() => {
    getWeatherDetails(city)
  }, [city])

  if (isWeatherLoading || cityIsLoading || !city) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-900 px-5 pb-0 pt-2">
      <View className="mb-2">
        <AutocompleteInput
          data={cities}
          isLoading={isSearching}
          placeholder="Buscar local"
          value={search}
          onChangeValue={setSearch}
          onPress={handleSelect}
        />
      </View>

      <WeatherToday city={city.name} weather={weather.today.weather} />

      <ScrollView
        className="mt-2"
        contentContainerStyle={{ paddingBottom: 12 }}
        showsVerticalScrollIndicator={false}
      >
        <WeatherDetails data={weather.today.details} />
        <NextDays days={weather.nextDays} />
      </ScrollView>
    </SafeAreaView>
  )
}
