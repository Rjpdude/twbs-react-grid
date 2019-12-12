import * as Root from './index'

test('Exports theme component and context', () => {
  expect(Root.gridThemeContext).toEqual(expect.any(Object))
  expect(Root.GridTheme).toEqual(expect.any(Function))
})

test('Exports container element', () => {
  expect(Root.Container).toEqual(expect.any(Function))
})

test('Exports row element', () => {
  expect(Root.Row).toEqual(expect.any(Function))
})

test('Exports column element', () => {
  expect(Root.Col).toEqual(expect.any(Function))
})
