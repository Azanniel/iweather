import { isDaytimeNow } from './is-daytime-now'

describe('Is day time now', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('should be able to return true when hours are 10AM', () => {
    const mocked10AM = new Date(2023, 0, 1, 10, 0, 0) // 10AM
    jest.useFakeTimers().setSystemTime(mocked10AM)

    const sut = isDaytimeNow()

    expect(sut).toBeTruthy()
  })

  it('should be able to return true when hours are 7AM', () => {
    const mocked7AM = new Date(2023, 0, 1, 7, 1, 0) // 7AM
    jest.useFakeTimers().setSystemTime(mocked7AM)

    const sut = isDaytimeNow()

    expect(sut).toBeTruthy()
  })

  it('should be able to return false when hours are 6PM', () => {
    const mocked6PM = new Date(2023, 0, 1, 18, 0, 0) // 6PM
    jest.useFakeTimers().setSystemTime(mocked6PM)

    const sut = isDaytimeNow()

    expect(sut).toBeFalsy()
  })

  it('should be able to return false when hours are 6AM', () => {
    const mocked6AM = new Date(2023, 0, 1, 6, 0, 0) // 6AM
    jest.useFakeTimers().setSystemTime(mocked6AM)

    const sut = isDaytimeNow()

    expect(sut).toBeFalsy()
  })
})
