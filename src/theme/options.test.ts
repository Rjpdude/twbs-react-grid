import * as Options from './options'

describe('Theme Options', () => {
  test('Default theme function', () => {
    expect(Options.getDefaultTheme()).toMatchSnapshot()
  })
})
