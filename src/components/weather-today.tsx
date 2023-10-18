import { ImageBackground, Text, View } from 'react-native'

import backgroundImg from '@/assets/bg-weathers/few-clouds-night.png'
import Icon from '@/assets/icons-weathers/few-clouds-night.svg'

export function WeatherToday() {
  return (
    <View className="rounded-xl bg-gray-800 p-3">
      <ImageBackground
        className="justify-between overflow-hidden rounded-lg bg-gray-700"
        resizeMode="cover"
        source={backgroundImg}
      >
        <View className="p-5">
          <Text className="font-strong text-base text-gray-100">
            Porto Alegre, RS
          </Text>

          <Text className="font-sans text-xs text-gray-100">
            Segunda-feira, 15 de maio de 2023
          </Text>
        </View>

        <View className="mt-2 w-full flex-row">
          <View className="ml-5 flex-1 justify-end pb-5">
            <Text className="font-heavy text-5xl leading-[52px] text-gray-100">
              28ºc
            </Text>

            <Text className="font-strong text-base text-gray-100">
              26ºc / 32ºc
            </Text>

            <Text className="font-sans text-sm capitalize text-gray-100">
              Poucas nuvens
            </Text>
          </View>

          <Icon width={120} height={120} />
        </View>
      </ImageBackground>
    </View>
  )
}
