import { render } from '@testing-library/react-native'
import { Loading } from './loading'
import colors from 'tailwindcss/colors'

describe('Component: Loading', () => {
  it('should be able to render correctly', () => {
    const { queryByTestId } = render(<Loading />)

    const sut = queryByTestId('loading')

    expect(sut).toBeTruthy()
  })

  it('should be able to render correctly layout style', () => {
    const { queryByTestId } = render(<Loading />)

    const sut = queryByTestId('loading')

    expect(sut).toHaveStyle({
      alignItems: 'center',
      justifyContent: 'center',
    })
  })

  it('should be render indicator in blue color', () => {
    const { getByTestId } = render(<Loading />)

    const sut = getByTestId('indicator')

    expect(sut.props.color).toEqual(colors.blue[300])
  })
})
