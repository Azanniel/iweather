import { ImageBackground, Text, View } from 'react-native'
import dayjs from 'dayjs'

import { weatherIcons } from '@/utils/weather-icons'
import { isDaytimeNow } from '@/utils/is-daytime-now'

export interface Weather {
  temp: string
  temp_min: string
  temp_max: string
  description: string
  details: typeof weatherIcons.Clouds
}

interface WeatherTodayProps {
  city: string
  weather: Weather
}

export function WeatherToday(props: WeatherTodayProps) {
  const today = dayjs(new Date()).format('dddd, DD [de] MMMM [de] YYYY')
  const isDay = isDaytimeNow()

  const backgroundImg = isDay
    ? props.weather.details.bg_day
    : props.weather.details.bg_night

  const Icon = isDay
    ? props.weather.details.icon_day
    : props.weather.details.icon_night

  return (
    <View className="rounded-xl bg-gray-800">
      <ImageBackground
        testID={'image-background'.concat(isDay ? '-day' : '-night')}
        className="justify-between overflow-hidden rounded-lg bg-gray-700"
        resizeMode="cover"
        source={backgroundImg}
      >
        <View className="p-5">
          <Text className="font-strong text-base text-gray-100">
            {props.city}
          </Text>

          <Text testID="week-day" className="font-sans text-xs text-gray-100">
            {today}
          </Text>
        </View>

        <View className="mt-2 w-full flex-row">
          <View className="ml-5 flex-1 justify-end pb-5">
            <Text className="font-heavy text-5xl leading-[52px] text-gray-100">
              {props.weather.temp}
            </Text>

            <Text className="font-strong text-base text-gray-100">
              {props.weather.temp_min} / {props.weather.temp_max}
            </Text>

            <Text className="font-sans text-sm capitalize text-gray-100">
              {props.weather.description}
            </Text>
          </View>

          <Icon
            testID={'weather-icon'.concat(isDay ? '-day' : '-night')}
            width={120}
            height={120}
          />
        </View>
      </ImageBackground>
    </View>
  )
}
