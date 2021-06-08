import { CSSObject } from 'styled-components'
import { configureElement } from '../element/element'
import { ThemeOptions } from '../theme/options'

export interface ContainerProps {
  size: 'fluid' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Container = configureElement<ContainerProps>(
  'Container', ({ ownProps, themeProps }) => {
    const containerStyle = initialContainerStyle(themeProps)
    const size = ownProps.size

    if (size !== 'fluid') {
      const sizeIndex = !size ? -1 : containerSizeBreakpoints.indexOf(size)
      const breakpoints =
        sizeIndex === -1
          ? containerSizeBreakpoints
          : containerSizeBreakpoints.filter((_, index) => index >= sizeIndex)

      breakpoints.forEach((breakpoint) => {
        containerStyle[`@media (min-width: ${themeProps[breakpoint]}px)`] = {
          maxWidth: `${themeProps[`${breakpoint}Width`]}px`
        }
      })
    }

    return containerStyle
  },
  ['size']
)

function initialContainerStyle({ spacing }: ThemeOptions): CSSObject {
  const padding = `${spacing}px`
  return {
    width: '100%',
    paddingRight: padding,
    paddingLeft: padding,
    marginRight: 'auto',
    marginLeft: 'auto'
  }
}

const containerSizeBreakpoints = ['sm', 'md', 'lg', 'xl']
