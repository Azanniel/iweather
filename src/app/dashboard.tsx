import { ImageBackground, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import backgroundImg from '@/assets/bg-weathers/few-clouds-night.png'
import Icon from '@/assets/icons-weathers/few-clouds-night.svg'

export default function Page() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900 p-5 pt-2">
      <View className="rounded-xl bg-gray-800 p-3">
        <ImageBackground
          className="justify-between overflow-hidden rounded-lg bg-gray-700 p-5"
          resizeMode="cover"
          source={backgroundImg}
        >
          <View>
            <Text className="font-strong text-base text-gray-100">
              Porto Alegre, RS
            </Text>

            <Text className="font-sans text-xs text-gray-100">
              Segunda-feira, 15 de maio de 2023
            </Text>
          </View>

          <View className="w-full flex-row">
            <View className="mb-4 flex-1 justify-end">
              <Text className="pt-1 font-heavy text-5xl text-gray-100">
                28ºc
              </Text>

              <Text className="font-strong text-base text-gray-100">
                26ºc / 32ºc
              </Text>

              <Text className="font-sans text-sm capitalize text-gray-100">
                Poucas nuvens
              </Text>
            </View>

            <Icon width={160} height={160} />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}
