import { CSSObject } from 'styled-components'
import { configureElement } from '../element/element'
import { ThemeOptions } from '../theme/options'
import { Col } from './col'

export interface RowProps {
  /**
   * When true, the row's margin and child column padding are set to 0.
   * 
   * @see https://getbootstrap.com/docs/4.0/layout/grid/#no-gutters
   */
  noGutters: boolean
}

export const Row = configureElement<RowProps>(
  (props) => {
    const { noGutters } = props.ownProps
    const rowStyle = initialRowStyle(props.themeProps, noGutters)

    if (noGutters) {
      rowStyle[`> ${Col.styledComponent}`] = {
        paddingLeft: 0,
        paddingRight: 0
      }
    }

    return rowStyle
  },
  ['noGutters']
)

function initialRowStyle(
  { spacing }: ThemeOptions,
  noGutters: boolean
): CSSObject {
  const margin = noGutters ? 0 : `${spacing}px`
  return {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: margin,
    marginRight: margin
  }
}
