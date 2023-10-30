import { render } from '@testing-library/react-native'
import { WeatherDetails } from './weather-details'

const data = {
  temp_kf: '5',
  humidity: '70%',
  feels_like: '26ºC',
  wind_speed: '10 km/h',
  probability: '50%',
}

describe('Component: Weather details', () => {
  it('should be able to render five attributes of weather', () => {
    const { getByTestId } = render(<WeatherDetails data={data} />)

    const container = getByTestId('weather-details')

    expect(container.children).toHaveLength(5)
  })

  it('should be able to render the title and value of one attribute', () => {
    const { queryByText } = render(<WeatherDetails data={data} />)

    expect(queryByText('26ºC')).toBeTruthy()
    expect(queryByText('Sensação térmica')).toBeTruthy()
  })
})
