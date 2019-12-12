import { css, createGlobalStyle } from 'styled-components'

export const Global = css`
  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`

export const GridThemeStyle = createGlobalStyle`
  ${Global}
`
