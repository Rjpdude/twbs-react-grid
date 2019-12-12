import { CSSObject } from 'styled-components'
import { configureElement } from '../element/element'
import { ThemeOptions } from '../theme/options'

export interface ContainerProps {
  /**
   * When true, the container will not conform to the breakpoint sizing and
   * spans across the entire width of it's parent.
   * 
   * @see https://getbootstrap.com/docs/4.0/layout/grid/#how-it-works
   */
  fluid: boolean
}

export const Container = configureElement<ContainerProps>(
  (props) => {
    const containerStyle = initialContainerStyle(props.themeProps)

    if (!props.ownProps.fluid) {
      ;['sm', 'md', 'lg', 'xl'].forEach((breakpoint) => {
        containerStyle[
          `@media (min-width: ${props.themeProps[breakpoint]}px)`
        ] = {
          maxWidth: `${props.themeProps[`${breakpoint}Width`]}px`
        }
      })
    }

    return containerStyle
  },
  ['fluid']
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
