import { useEffect, useState } from 'react'
import { Text, View, ImageBackground, ScrollView } from 'react-native'
import { AutocompleteInput } from '@/components/autocomplete-input'

import { City } from '@/libs/storage/city-storage'
import { useCity } from '@/hooks/use-city'
import { getCityByName } from '@/services/open-weather/get-city-by-name'

import Logo from '@/assets/logo.svg'
import backgroundImg from '@/assets/background.png'

export default function Search() {
  const [search, setSearch] = useState('')
  const [isFetchingCities, setIsFetchingCities] = useState(false)
  const [cities, setCities] = useState<City[]>([])

  const { handleChanceCity } = useCity()

  async function getCities(city: string) {
    setIsFetchingCities(true)

    const response = await getCityByName(city)

    if (response) {
      setCities([response])
    } else {
      setCities([])
    }

    setIsFetchingCities(false)
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return
    }

    const debounce = setTimeout(() => getCities(search), 500)

    return () => clearInterval(debounce)
  }, [search])

  return (
    <ScrollView>
      <ImageBackground
        className="h-screen w-screen items-center p-6 pt-12"
        source={backgroundImg}
        defaultSource={backgroundImg}
        resizeMode="cover"
      >
        <Logo width={186} height={32} />

        <View className="w-full flex-1 justify-center pb-14">
          <Text className="text-center font-strong text-xl text-zinc-100">
            Boas vindas ao <Text className="text-blue-300">iWeather</Text>
          </Text>

          <Text className="mb-8 mt-1 text-center font-sans text-sm text-gray-200">
            Escolha um local para ver a previsão do tempo
          </Text>

          <AutocompleteInput
            data={cities}
            isLoading={isFetchingCities}
            placeholder="Buscar local"
            value={search}
            onChangeValue={setSearch}
            onPress={handleChanceCity}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  )
}
