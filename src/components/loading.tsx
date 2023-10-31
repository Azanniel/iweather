import { ActivityIndicator, View } from 'react-native'
import colors from 'tailwindcss/colors'

export function Loading() {
  return (
    <View testID="loading" className="flex-1 items-center justify-center">
      <ActivityIndicator testID="indicator" color={colors.blue[300]} />
    </View>
  )
}
