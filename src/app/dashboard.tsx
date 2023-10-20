import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WeatherToday } from '@/components/weather-today'
import { WeatherDetails } from '@/components/weather-details'
import { NextDays } from '@/components/next-days'

export default function Dashboard() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900 px-5 pb-0 pt-2">
      <WeatherToday />

      <ScrollView
        className="mt-2"
        contentContainerStyle={{ paddingBottom: 12 }}
        showsVerticalScrollIndicator={false}
      >
        <WeatherDetails />
        <NextDays />
      </ScrollView>
    </SafeAreaView>
  )
}
