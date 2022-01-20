import { getCategory } from './getCategory'


const categories = [
  {
    id: 1,
    name: 'test'
  }
]

test('test category have name test', () => {
  expect(getCategory(categories, 1).name).toBe('test')
})
