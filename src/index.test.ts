import * as Root from './index'

describe('Root', () => {
  test('Exports theme component and context', () => {
    expect(Root.gridThemeContext).toBeDefined()
    expect(Root.GridTheme).toBeDefined()
  })

  test('Exports container element', () => {
    expect(Root.Container).toBeDefined()
    expect(typeof Root.Container).toBe('function')
  })

  test('Exports row element', () => {
    expect(Root.Row).toBeDefined()
    expect(typeof Root.Row).toBe('function')
  })

  test('Exports column element', () => {
    expect(Root.Col).toBeDefined()
    expect(typeof Root.Col).toBe('function')
  })
})
