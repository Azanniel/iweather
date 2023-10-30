import { View } from 'react-native'
import { Day, WeatherDay } from './day'

interface NextDaysProps {
  days: WeatherDay[]
}

export function NextDays(props: NextDaysProps) {
  return (
    <View
      testID="next-days"
      className="mt-2 flex-row items-center justify-between rounded-lg bg-gray-800 p-3"
    >
      {props.days.map((day) => {
        return <Day key={day.day} weather={day} />
      })}
    </View>
  )
}
