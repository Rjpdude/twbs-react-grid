import * as Root from './index'

test('Exports theme component and context', () => {
  expect(Root.gridThemeContext).toEqual(expect.any(Object))
  expect(Root.GridTheme).toEqual(expect.any(Function))
})

test('Exports container element', () => {
  expect(Root.Container.attrs).toEqual([{"className": "twbs-grid-container"}])
})

test('Exports row element', () => {
  expect(Root.Row.attrs).toEqual([{"className": "twbs-grid-row"}])
})

test('Exports column element', () => {
  expect(Root.Col.attrs).toEqual([{"className": "twbs-grid-col"}])
})
