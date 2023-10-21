import { generateNextFiveDays } from './generate-next-five-days'

describe('Generate next 5 days', () => {
  beforeEach(() => {
    const mockedDate = new Date(2023, 0, 1)
    jest.useFakeTimers().setSystemTime(mockedDate)
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should return 5 days', () => {
    const days = generateNextFiveDays()

    expect(days).toHaveLength(5)
  })

  it('should be able returns 5 days with date format DD/MM', () => {
    const days = generateNextFiveDays()

    expect(days).toEqual(['02/01', '03/01', '04/01', '05/01', '06/01'])
  })
})
