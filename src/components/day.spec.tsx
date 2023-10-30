import { render } from '@testing-library/react-native'
import { Day, WeatherDay } from './day'
import clearDay from '@/assets/icons-weathers/clear-day.svg'

const weather: WeatherDay = {
  icon: clearDay,
  day: '30/10',
  max: '30ºC',
  min: '28ºC',
}

describe('Component: Day', () => {
  it('should be able to render day details', () => {
    const { getByText } = render(<Day weather={weather} />)

    expect(getByText('30/10')).toBeTruthy()
    expect(getByText('30ºC')).toBeTruthy()
  })
})
