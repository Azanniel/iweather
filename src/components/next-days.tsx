import { Text, View } from 'react-native'
import { SvgProps } from 'react-native-svg'

interface Day {
  icon: React.FC<SvgProps>
  day: string
  weather: string
  max: string
  min: string
}

interface NextDaysProps {
  days: Day[]
}

export function NextDays(props: NextDaysProps) {
  return (
    <View className="mt-2 flex-row items-center justify-between rounded-lg bg-gray-800 p-3">
      {props.days.map((day) => {
        const Icon = day.icon

        return (
          <View key={day.day} className="items-center">
            <Text className="font-strong text-sm text-gray-200">{day.day}</Text>

            <Icon width={56} height={56} />

            <Text className="font-strong text-sm text-gray-100">{day.max}</Text>
            <Text className="font-strong text-sm text-gray-400">{day.min}</Text>
          </View>
        )
      })}
    </View>
  )
}
