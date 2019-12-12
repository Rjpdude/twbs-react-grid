import React from 'react'
import { mount, shallow } from 'enzyme'
import { getDefaultTheme } from './options'
import { GridThemeStyle } from './style'
import * as Theme from './theme'

describe('Theme', () => {
  describe('Context obj', () => {
    test('Exports context obj', () => {
      expect(Theme.gridThemeContext).toMatchSnapshot()
    })
  })

  describe('GridTheme component', () => {
    test('Exports grid theme component', () => {
      expect(Theme.GridTheme).toEqual(expect.any(Function))
    })

    test('Renders theme style', () => {
      expect(
        shallow(<Theme.GridTheme />)
          .find(GridThemeStyle)
          .exists()
      ).toBe(true)
    })

    test('Omits theme style when `themeStyle` prop is false', () => {
      expect(
        shallow(<Theme.GridTheme themeStyle={false} />)
          .find(GridThemeStyle)
          .exists()
      ).toBe(false)
    })

    test('Renders children', () => {
      const gridTheme = mount(
        <Theme.GridTheme>
          <p>Child element</p>
        </Theme.GridTheme>
      )
      expect(gridTheme.find('p').text()).toBe('Child element')
    })

    test('Supplies theme context', () => {
      const Child = () => (
        <p>{React.useContext(Theme.gridThemeContext).spacing}</p>
      )

      const theme = mount(
        <Theme.GridTheme spacing={16}>
          <Child />
        </Theme.GridTheme>
      )

      expect(theme.text()).toBe('16')
    })
  })

  describe('getMergedTheme', () => {
    test('Supplies default theme object on empty props', () => {
      expect(Theme.getMergedTheme({})).toEqual(getDefaultTheme())
    })

    test('Omits invalid theme props', () => {
      // @ts-ignore
      expect(Theme.getMergedTheme({ children: null, someProp: 5 })).toEqual(
        getDefaultTheme()
      )
    })

    test('Merges supplied theme options', () => {
      const options = { spacing: 18, xlWidth: 1200 }
      const defaultTheme = getDefaultTheme()
      const merged = Theme.getMergedTheme(options)

      Object.entries(options).forEach(([key, value]) => {
        expect(merged[key]).toBe(value)
      })

      Object.entries(merged).forEach(([key, value]) => {
        if (!options[key]) {
          expect(value).toEqual(defaultTheme[key])
        }
      })
    })
  })
})
