import { SvgProps } from 'react-native-svg'
import { WeatherIconsKeys, weatherIcons } from '@/utils/weather-icons'
import { api } from './api'
import { generateNextFiveDays } from '@/utils/generate-next-five-days'
import dayjs from 'dayjs'

interface Day {
  icon: React.FC<SvgProps>
  day: string
  weather: string
  max: string
  min: string
}

export interface WeatherAPIResponse {
  list: {
    pop: number
    dt_txt: string
    main: {
      temp: number
      temp_min: number
      temp_max: number
      feels_like: number
      humidity: number
      temp_kf: number
    }
    wind: {
      speed: number
    }
    weather: {
      description: string
      main: WeatherIconsKeys
    }[]
  }[]
}

interface GetWeatherByCityRequest {
  latitude: number
  longitude: number
}

export interface GetWeatherByCityResponse {
  today: {
    weather: {
      temp: string
      temp_min: string
      temp_max: string
      description: string
      details: typeof weatherIcons.Clouds
    }
    details: {
      temp_kf: string
      humidity: string
      feels_like: string
      wind_speed: string
      probability: string
    }
  }
  nextDays: Day[]
}

export async function getWeatherByCity({
  latitude,
  longitude,
}: GetWeatherByCityRequest): Promise<GetWeatherByCityResponse> {
  const response = await api.get<WeatherAPIResponse>(
    `/forecast?lat=${latitude}&lon=${longitude}`,
  )

  const { main, weather, wind, pop } = response.data.list[0]

  const today = {
    weather: {
      temp: `${Math.ceil(main.temp)}ºc`,
      temp_min: `${Math.floor(main.temp_min)}ºc`,
      temp_max: `${Math.ceil(main.temp_max)}ºc`,
      description: weather[0].description,
      details: weatherIcons[weather[0].main],
    },
    details: {
      feels_like: `${Math.floor(main.feels_like)}ºc`,
      probability: `${Math.ceil(pop * 100)}%`,
      wind_speed: `${wind.speed}km/h`,
      humidity: `${main.humidity}%`,
      temp_kf: `${Math.floor(main.temp_kf)}`,
    },
  }

  const days = generateNextFiveDays()
  const daysAdded: string[] = []
  const nextDays: Day[] = []

  response.data.list.forEach((item) => {
    const day = dayjs(new Date(item.dt_txt)).format('DD/MM')

    if (days.includes(day) && !daysAdded.includes(day)) {
      daysAdded.push(day)

      const status: WeatherIconsKeys = item.weather[0].main

      const details = weatherIcons[status]

      nextDays.push({
        day: dayjs(new Date(item.dt_txt)).format('ddd'),
        min: `${Math.floor(item.main.temp_min)}ºc`,
        max: `${Math.ceil(item.main.temp_max)}ºc`,
        weather: item.weather[0].description,
        icon: details.icon_day,
      })
    }
  })

  return { today, nextDays }
}
