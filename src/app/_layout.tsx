import { StatusBar } from 'expo-status-bar'
import { Slot } from 'expo-router'
import { View } from 'react-native'

export default function Layout() {
  return (
    <View className="flex-1 bg-gray-800">
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Slot />
    </View>
  )
}
