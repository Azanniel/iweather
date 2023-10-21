import bgCloudyDay from '@/assets/bg-weathers/cloudy-day.png'
import bgCloudyNight from '@/assets/bg-weathers/cloudy-night.png'
import iconCloudyDay from '@/assets/icons-weathers/cloudy-day.svg'
import iconCloudyNight from '@/assets/icons-weathers/cloudy-night.svg'

import iconRainDay from '@/assets/icons-weathers/rain-moment-day.svg'
import bgRainDay from '@/assets/bg-weathers/rain-day.png'
import bgRainNight from '@/assets/bg-weathers/rain-night.png'

import iconClearDay from '@/assets/icons-weathers/clear-day.svg'
import iconClearNight from '@/assets/icons-weathers/clear-night.svg'
import bgClearDay from '@/assets/bg-weathers/clear-day.png'
import bgClearNight from '@/assets/bg-weathers/clear-night.png'

import iconSnowDay from '@/assets/icons-weathers/snow-day.svg'
import iconSnowNight from '@/assets/icons-weathers/snow-night.svg'
import bgSnowDay from '@/assets/bg-weathers/snow-day.png'
import bgSnowNight from '@/assets/bg-weathers/snow-night.png'

export const weatherIcons = {
  Clouds: {
    name: 'Nuvens',
    bg_day: bgCloudyDay,
    bg_night: bgCloudyNight,
    icon_day: iconCloudyDay,
    icon_night: iconCloudyNight,
  },

  Rain: {
    name: 'Chuva',
    bg_day: bgRainDay,
    bg_night: bgRainNight,
    icon_day: iconRainDay,
    icon_night: iconRainDay,
  },

  Clear: {
    name: 'Limpo',
    bg_day: bgClearDay,
    bg_night: bgClearNight,
    icon_day: iconClearDay,
    icon_night: iconClearNight,
  },

  Snow: {
    name: 'Neve',
    bg_day: bgSnowDay,
    bg_night: bgSnowNight,
    icon_day: iconSnowDay,
    icon_night: iconSnowNight,
  },
}

export type WeatherIconsKeys = keyof typeof weatherIcons
