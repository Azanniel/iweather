import { Text, View } from 'react-native'

import ThermometerIcon from '@/assets/icons-weathers/thermometer.svg'
import RainIcon from '@/assets/icons-weathers/rain.svg'
import WindIcon from '@/assets/icons-weathers/wind.svg'
import DropIcon from '@/assets/icons-weathers/drop.svg'
import SunIcon from '@/assets/icons-weathers/sun.svg'

export function WeatherDetails() {
  return (
    <View className="w-full divide-y divide-gray-700 rounded-xl bg-gray-800 px-4">
      <View className="w-full flex-row items-center py-5">
        <ThermometerIcon width={24} height={24} />

        <Text className="ml-3 flex-1 font-strong text-sm text-gray-200">
          Sensação térmica
        </Text>

        <Text className="font-strong text-base text-gray-100">26ºc</Text>
      </View>

      <View className="w-full flex-row items-center py-5">
        <RainIcon width={24} height={24} />

        <Text className="ml-3 flex-1 font-strong text-sm text-gray-200">
          Probabilidade de chuva
        </Text>

        <Text className="font-strong text-base text-gray-100">0%</Text>
      </View>

      <View className="w-full flex-row items-center py-5">
        <WindIcon width={24} height={24} />

        <Text className="ml-3 flex-1 font-strong text-sm text-gray-200">
          Velocidade do vento
        </Text>

        <Text className="font-strong text-base text-gray-100">8km/h</Text>
      </View>

      <View className="w-full flex-row items-center py-5">
        <DropIcon width={24} height={24} />

        <Text className="ml-3 flex-1 font-strong text-sm text-gray-200">
          Umidade do ar
        </Text>

        <Text className="font-strong text-base text-gray-100">40%</Text>
      </View>

      <View className="w-full flex-row items-center py-5">
        <SunIcon width={24} height={24} />

        <Text className="ml-3 flex-1 font-strong text-sm text-gray-200">
          Índice UV
        </Text>

        <Text className="font-strong text-base text-gray-100">5</Text>
      </View>
    </View>
  )
}
