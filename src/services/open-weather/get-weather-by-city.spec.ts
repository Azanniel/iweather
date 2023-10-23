import { api } from './api'
import { WeatherAPIResponse, getWeatherByCity } from './get-weather-by-city'

describe('Open Weather: Get weather by city', () => {
  beforeEach(() => {
    const currentDay = new Date()
    const nextDay = new Date()
    nextDay.setDate(currentDay.getDate() + 1)

    const data: WeatherAPIResponse = {
      list: [
        {
          pop: 0.5,
          main: {
            temp: 34,
            temp_min: 32,
            temp_max: 36,
            feels_like: 35,
            humidity: 0.5,
            temp_kf: 1,
          },
          wind: {
            speed: 15,
          },
          weather: [
            {
              description: 'Céu limpo',
              main: 'Clear',
            },
          ],
          dt_txt: nextDay.toDateString(),
        },
        {
          pop: 0.5,
          main: {
            temp: 34,
            temp_min: 32,
            temp_max: 36,
            feels_like: 35,
            humidity: 0.5,
            temp_kf: 1,
          },
          wind: {
            speed: 15,
          },
          weather: [
            {
              description: 'Céu limpo',
              main: 'Clear',
            },
          ],
          dt_txt: nextDay.toDateString(),
        },
      ],
    }

    jest.spyOn(api, 'get').mockResolvedValue({ data })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be return weather api data formatted', async () => {
    const response = await getWeatherByCity({ latitude: 123, longitude: 123 })

    expect(response).toHaveProperty('today')
    expect(response).toHaveProperty('nextDays')
    expect(response.nextDays).toHaveLength(1)
  })
})
