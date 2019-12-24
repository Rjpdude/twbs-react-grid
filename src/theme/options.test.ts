import * as Options from './options'

test('Default theme function', () => {
  expect(Options.getDefaultTheme()).toMatchSnapshot()
})
