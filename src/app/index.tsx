import { Text, View, ImageBackground, ScrollView } from 'react-native'
import { Redirect } from 'expo-router'
import { AutocompleteInput } from '@/components/autocomplete-input'
import { useCity } from '@/hooks/use-city'

import Logo from '@/assets/logo.svg'
import backgroundImg from '@/assets/background.png'

export default function Page() {
  const { city } = useCity()

  if (city) {
    return <Redirect href="/dashboard" />
  }

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

          <AutocompleteInput />
        </View>
      </ImageBackground>
    </ScrollView>
  )
}
