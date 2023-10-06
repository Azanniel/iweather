import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-sans text-2xl text-gray-100">
        Font Nunito Regular
      </Text>

      <Text className="font-strong text-2xl text-gray-100">
        Font Nunito Bold
      </Text>

      <Text className="font-heavy text-2xl text-gray-100">
        Font Nunito Extra Bold
      </Text>
    </View>
  )
}
