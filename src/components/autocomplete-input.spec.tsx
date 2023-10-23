import { render, screen } from '@testing-library/react-native'
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
})
