import dayjs from 'dayjs'

export function generateNextFiveDays() {
  const days = []

  for (let i = 0; i < 5; i++) {
    const date = dayjs().add(i + 1, 'day')
    const formattedDate = date.format('DD/MM')
    days.push(formattedDate)
  }

  return days
}
