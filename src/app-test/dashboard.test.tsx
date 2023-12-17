import { api } from '@/services/open-weather/api'
import { WeatherAPIResponse } from '@/services/open-weather/get-weather-by-city'
import { render, waitFor } from 'tests/utils/custom-render'
import Dashboard from '../app/dashboard'
import { saveStorageCity } from '@/libs/storage/city-storage'

jest.mock('@/hooks/use-dashboard-route', () => {
  return {
    useDashboardRoute: jest.fn(),
  }
})

describe('Screen: Dashboard', () => {
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

  afterAll(() => {
    jest.unmock('@/hooks/use-dashboard-route')
  })

  it('should be show city weather details', async () => {
    const city = {
      id: '1',
      name: 'Manaus, BR',
      latitude: 123,
      longitude: 456,
    }

    await saveStorageCity(city)

    const { findByText } = render(<Dashboard />)

    const cityName = await waitFor(() => findByText(/manaus/i))

    expect(cityName).toBeTruthy()
  })
})
