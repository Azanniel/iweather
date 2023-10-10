import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="text-gray-100">Dashboard Page</Text>

      <Link className="text-blue-300" href="/">
        Go back
      </Link>
    </View>
  )
}
