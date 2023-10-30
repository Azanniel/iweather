import { View, Text } from 'react-native'
import { SvgProps } from 'react-native-svg'

export interface WeatherDay {
  icon: React.FC<SvgProps>
  day: string
  max: string
  min: string
}

interface DayProps {
  weather: WeatherDay
}

export function Day(props: DayProps) {
  const Icon = props.weather.icon

  return (
    <View className="items-center">
      <Text className="font-strong text-sm text-gray-200">
        {props.weather.day}
      </Text>

      <Icon width={56} height={56} />

      <Text className="font-strong text-sm text-gray-100">
        {props.weather.max}
      </Text>
      <Text className="font-strong text-sm text-gray-400">
        {props.weather.min}
      </Text>
    </View>
  )
}
