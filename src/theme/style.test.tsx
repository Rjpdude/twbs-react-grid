import * as Style from './style'

test('Global theme style', () => {
  expect(Style.Global).toMatchSnapshot()
})

test('Global theme style component', () => {
  expect(Style.GridThemeStyle).toEqual(expect.any(Function))
})
