import { dateFormatter } from './dateFormatter'

test('test format is correct', () => {
  const date = new Date('2021-11-15T13:00:00')
  expect(dateFormatter(date)).toBe('15.11.2021, 13:00:00')
})
