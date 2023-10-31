import { render } from '@testing-library/react-native'
import { WeatherToday, Weather } from './weather-today'

import fewCloudsDay from '@/assets/bg-weathers/few-clouds-day.png'
import fewCloudsNight from '@/assets/bg-weathers/few-clouds-night.png'
import fewCloudsDayIcon from '@/assets/icons-weathers/few-clouds-day.svg'
import fewCloudsNightIcon from '@/assets/icons-weathers/few-clouds-night.svg'

const city = 'Manaus, AM'
const weather: Weather = {
  temp: '28ºC',
  temp_min: '26ºC',
  temp_max: '32ºC',
  description: 'Poucas nuvens',
  details: {
    name: 'Nuvens',
    bg_day: fewCloudsDay,
    bg_night: fewCloudsNight,
    icon_day: fewCloudsDayIcon,
    icon_night: fewCloudsNightIcon,
  },
}

describe('Component: Weather today', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('should be able to render city name', () => {
    const { getByText } = render(<WeatherToday city={city} weather={weather} />)

    expect(getByText(city)).toBeTruthy()
  })

  it('should be able to render a background image and icon for morning', () => {
    const mocked7AM = new Date(2023, 0, 1, 7, 0, 0) // 7AM
    jest.useFakeTimers().setSystemTime(mocked7AM)

    const { queryByTestId } = render(
      <WeatherToday city={city} weather={weather} />,
    )

    const imageBackground = queryByTestId('image-background-day')
    const icon = queryByTestId('weather-icon-day')

    expect(imageBackground).toBeTruthy()
    expect(icon).toBeTruthy()
  })

  it('should be able to render a background image and icon for night', () => {
    const mocked6PM = new Date(2023, 0, 1, 18, 0, 0) // 6PM
    jest.useFakeTimers().setSystemTime(mocked6PM)

    const { queryByTestId } = render(
      <WeatherToday city={city} weather={weather} />,
    )

    const imageBackground = queryByTestId('image-background-night')
    const icon = queryByTestId('weather-icon-night')

    expect(imageBackground).toBeTruthy()
    expect(icon).toBeTruthy()
  })

  it('should be able to render a day of week and date', () => {
    const mockedDate = new Date(2023, 9, 30)
    jest.useFakeTimers().setSystemTime(mockedDate)

    const { getByTestId } = render(
      <WeatherToday city={city} weather={weather} />,
    )

    const weekDay = getByTestId('week-day')

    expect(weekDay.children[0]).toEqual('Monday, 30 de October de 2023')
  })
})
