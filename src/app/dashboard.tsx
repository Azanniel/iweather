import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WeatherToday } from '@/components/weather-today'
import { WeatherDetails } from '@/components/weather-details'

export default function Page() {
  return (
    <SafeAreaView className="flex-1 border border-red-400 bg-gray-900 p-5 pt-2">
      <WeatherToday />

      <ScrollView className="mt-2">
        <WeatherDetails />
      </ScrollView>
    </SafeAreaView>
  )
}
