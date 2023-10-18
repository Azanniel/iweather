import { Text, View } from 'react-native'

import StormIcon from '@/assets/icons-weathers/storm-day.svg'
import RainIcon from '@/assets/icons-weathers/rain-moment-day.svg'
import FewCloudsIcon from '@/assets/icons-weathers/few-clouds-day.svg'
import CloudyIcon from '@/assets/icons-weathers/cloudy-day.svg'
import ClearIcon from '@/assets/icons-weathers/clear-day.svg'

export function NextDays() {
  return (
    <View className="mt-2 flex-row items-center justify-between rounded-lg bg-gray-800 p-3">
      {/* Terça */}
      <View className="items-center">
        <Text className="font-strong text-sm text-gray-200">Ter</Text>

        <StormIcon width={56} height={56} />

        <Text className="font-strong text-sm text-gray-100">32ºC</Text>
        <Text className="font-strong text-sm text-gray-400">26ºC</Text>
      </View>

      {/* Quarta */}
      <View className="items-center">
        <Text className="font-strong text-sm text-gray-200">Qua</Text>

        <RainIcon width={56} height={56} />

        <Text className="font-strong text-sm text-gray-100">32ºC</Text>
        <Text className="font-strong text-sm text-gray-400">26ºC</Text>
      </View>

      {/* Quinta */}
      <View className="items-center">
        <Text className="font-strong text-sm text-gray-200">Qui</Text>

        <FewCloudsIcon width={56} height={56} />

        <Text className="font-strong text-sm text-gray-100">32ºC</Text>
        <Text className="font-strong text-sm text-gray-400">26ºC</Text>
      </View>

      {/* Sexta */}
      <View className="items-center">
        <Text className="font-strong text-sm text-gray-200">Sex</Text>

        <CloudyIcon width={56} height={56} />

        <Text className="font-strong text-sm text-gray-100">32ºC</Text>
        <Text className="font-strong text-sm text-gray-400">26ºC</Text>
      </View>

      {/* Sábado */}
      <View className="items-center">
        <Text className="font-strong text-sm text-gray-200">Sáb</Text>

        <ClearIcon width={56} height={56} />

        <Text className="font-strong text-sm text-gray-100">32ºC</Text>
        <Text className="font-strong text-sm text-gray-400">26ºC</Text>
      </View>
    </View>
  )
}
