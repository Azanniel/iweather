import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <Text className="text-zinc-100">
        Hello world from route based file + Tailwind
      </Text>

      <StatusBar style="light" backgroundColor="transparent" translucent />
    </View>
  )
}
