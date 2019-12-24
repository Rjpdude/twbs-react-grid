import { createElement, createContext, PropsWithChildren } from 'react'
import { ThemeOptions, getDefaultTheme } from './options'
import { GridThemeStyle } from './style'

export const gridThemeContext = createContext(getDefaultTheme())

export function GridTheme(props: PropsWithChildren<Partial<ThemeOptions>>) {
  const style = createElement(GridThemeStyle)
  const context = {
    value: getMergedTheme(props)
  }
  return createElement(
    gridThemeContext.Provider,
    context,
    props.themeStyle !== false && style,
    props.children
  )
}

export function getMergedTheme(themeProps: Partial<ThemeOptions>) {
  const theme = getDefaultTheme()

  Object.keys(theme).forEach((key) => {
    if (themeProps[key]) {
      Object.assign(theme, {
        [key]: themeProps[key]
      })
    }
  })

  return theme
}
