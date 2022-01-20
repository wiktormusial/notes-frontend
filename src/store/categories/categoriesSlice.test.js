import reducer from './categoriesSlice'

test('test should return initialState', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      status: 'idle',
      error: null,
      categories: []
    }
  )
})
