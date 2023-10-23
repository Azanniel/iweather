import { View, ActivityIndicator, TouchableOpacity, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import colors from 'tailwindcss/colors'
import { City } from '@/libs/storage/city-storage'

interface AutocompleteInputProps {
  isLoading?: boolean
  placeholder: string
  data: City[]
  value?: string
  onChangeValue?: (value: string) => void
  onPress?: (value: City) => void
}

export function AutocompleteInput(props: AutocompleteInputProps) {
  return (
    <View className="relative z-10 w-full">
      <View className="h-14 w-full flex-row rounded-lg bg-gray-600 px-5 font-sans text-base">
        <TextInput
          className="flex-1 text-zinc-100"
          placeholder={props.placeholder}
          placeholderTextColor={colors.gray[400]}
          value={props.value}
          onChangeText={props.onChangeValue}
        />

        {props.isLoading && (
          <ActivityIndicator
            testID="activity-indicator"
            size="small"
            color={colors.blue[300]}
          />
        )}
      </View>

      <View className="absolute left-0 right-0 top-16 divide-y divide-gray-600 overflow-hidden rounded-lg">
        {props.data.map((city) => {
          return (
            <TouchableOpacity
              key={city.latitude}
              activeOpacity={0.6}
              onPress={() => (props.onPress ? props.onPress(city) : undefined)}
            >
              <Text className="bg-gray-500 px-5 py-4 font-sans text-base text-gray-100">
                {city.name}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}
