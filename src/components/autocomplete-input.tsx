import { View, ActivityIndicator, TouchableOpacity, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import colors from 'tailwindcss/colors'

export function AutocompleteInput() {
  return (
    <View className="relative z-10 w-full">
      <View className="h-14 w-full flex-row rounded-lg bg-gray-600 px-5 font-sans text-base">
        <TextInput
          className="flex-1 text-zinc-100 placeholder:text-zinc-100"
          placeholder="Buscar local"
          placeholderTextColor={colors.gray[400]}
        />

        <ActivityIndicator size="small" color={colors.blue[300]} />
      </View>

      <View className="absolute left-0 right-0 top-16 divide-y divide-gray-600 overflow-hidden rounded-lg">
        <TouchableOpacity>
          <Text className="bg-gray-500 px-5 py-4 font-sans text-base text-gray-100">
            Porto Alegre, RS - Brasil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="bg-gray-500 px-5 py-4 font-sans text-base text-gray-100">
            Porto Seguro, BA - Brasil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="bg-gray-500 px-5 py-4 font-sans text-base text-gray-100">
            Porto - Portugal
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
