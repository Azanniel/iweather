import { render } from '@testing-library/react-native'
import { NextDays } from './next-days'
import clearDay from '@/assets/icons-weathers/clear-day.svg'
import { WeatherDay } from './day'

describe('Component: NextDays', () => {
  it('should be able to render five days correctly', () => {
    const days: WeatherDay[] = [
      { icon: clearDay, day: '27/10', max: '30ºC', min: '28ºC' },
      { icon: clearDay, day: '28/10', max: '30ºC', min: '28ºC' },
      { icon: clearDay, day: '29/10', max: '30ºC', min: '28ºC' },
      { icon: clearDay, day: '30/10', max: '30ºC', min: '28ºC' },
      { icon: clearDay, day: '31/10', max: '30ºC', min: '28ºC' },
    ]

    const { getByText, getByTestId } = render(<NextDays days={days} />)

    const container = getByTestId('next-days')

    expect(container.children).toHaveLength(5)
    expect(getByText('29/10')).toBeTruthy()
  })
})
