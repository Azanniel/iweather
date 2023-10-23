import { render, screen, fireEvent } from '@testing-library/react-native'
import { AutocompleteInput } from './autocomplete-input'

describe('Component: Autocomplete Input', () => {
  it('should be render component without activity indicator if is loading prop is undefined', () => {
    render(<AutocompleteInput data={[]} placeholder="Example placeholder" />)

    const activityIndicator = screen.queryByTestId('activity-indicator')
    expect(activityIndicator).toBeNull()
  })

  it('should be render component with activity indicator if is loading prop is true', () => {
    render(
      <AutocompleteInput
        data={[]}
        placeholder="Example placeholder"
        isLoading
      />,
    )

    const activityIndicator = screen.getByTestId('activity-indicator')
    expect(activityIndicator).toBeTruthy()
  })

  it('should be return the city details when city is selected', () => {
    const cities = [
      { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
      { id: '2', name: 'Manaus', latitude: 789, longitude: 123 },
    ]

    const onPress = jest.fn()

    const { getByText } = render(
      <AutocompleteInput
        data={cities}
        placeholder="Example placeholder"
        onPress={onPress}
      />,
    )

    const selectedCity = getByText(/manaus/i)

    fireEvent.press(selectedCity)

    expect(onPress).toBeCalledTimes(1)
    expect(onPress).toBeCalledWith(cities[1])
  })
})
