import { CSSObject } from 'styled-components'
import { ThemeOptions } from '../theme/options'
import { GridElement } from '../element/interface'
import { configureElement } from '../element/element'
import { getElementPropertyStyle } from '../element/util'
import * as gridPropertyStyleMap from '../element/style'

export interface GridColumn {
  /**
   * The size to assume on this breakpoint. If undefined, the breakpoint will
   * assume the size of the next lowest supplied size, or equal.
   *
   * @see https://getbootstrap.com/docs/4.0/layout/grid/#auto-layout-columns
   * @default equal
   */
  size: BreakpointVal
}

export interface ColumnProps {
  /**
   * The column's extra small / default size.
   *
   * @see https://getbootstrap.com/docs/4.0/layout/grid/#auto-layout-columns
   * @default equal
   */
  size: BreakpointVal
  /**
   * Either the size of the small breakpoint, or an object describing the
   * breakpoint's size and/or styling properties.
   */
  sm: BreakpointPropVal
  /**
   * Either the size of the medium breakpoint, or an object describing the
   * breakpoint's size and/or styling properties.
   */
  md: BreakpointPropVal
  /**
   * Either the size of the large breakpoint, or an object describing the
   * breakpoint's size and/or styling properties.
   */
  lg: BreakpointPropVal
  /**
   * Either the size of the extra-large breakpoint, or an object describing the
   * breakpoint's size and/or styling properties.
   */
  xl: BreakpointPropVal
}

export type BreakpointSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type BreakpointVal = 'equal' | 'auto' | string | BreakpointSize
export type BreakpointPropVal = BreakpointVal | GridElement<GridColumn>

export const Col = configureElement<ColumnProps>(
  ({ ownProps, themeProps }) => {
    if (!ownProps.size) {
      ownProps.size = 'equal'
    }

    return Object.keys(ownProps).reduce(
      (style, breakpointId) =>
        assignBreakpointStyle(
          ownProps,
          themeProps,
          breakpointId as keyof ColumnProps,
          style
        ),
      initialColStyle(themeProps)
    )
  },
  ['size', 'sm', 'md', 'lg', 'xl']
)

export function assignBreakpointStyle(
  props: Partial<ColumnProps>,
  theme: ThemeOptions,
  breakpointId: keyof ColumnProps,
  style: CSSObject
) {
  const breakpoint = props[breakpointId]
  const size = typeof breakpoint === 'object' ? breakpoint.size : breakpoint
  const baseStyle = generateBreakpointStyle(breakpointId, size)

  if (typeof breakpoint === 'object') {
    Object.keys(breakpoint).forEach((key) => {
      Object.assign(
        baseStyle,
        getElementPropertyStyle(gridPropertyStyleMap, key, breakpoint[key])
      )
    })
  }

  return Object.assign(
    style,
    breakpointId === 'size'
      ? baseStyle
      : {
          [`@media (min-width: ${theme[breakpointId]}px)`]: baseStyle
        }
  )
}

export function generateBreakpointStyle(
  breakpointId: keyof ColumnProps,
  size: BreakpointVal
) {
  return !size || size === 'equal'
    ? !size && breakpointId !== 'size'
      ? {}
      : breakpointStyleEqual
    : size === 'auto'
    ? breakpointStyleAuto
    : breakpointStyle(size)
}

export function initialColStyle({ spacing }: ThemeOptions): CSSObject {
  const padding = `${spacing}px`
  return {
    width: '100%',
    position: 'relative',
    paddingRight: padding,
    paddingLeft: padding
  }
}

export function breakpointStyle(breakpointVal: string | number): CSSObject {
  const size =
    typeof breakpointVal === 'string'
      ? breakpointVal
      : `${((100 / 12) * breakpointVal).toFixed(6)}%`
  return {
    flex: `0 0 ${size}`,
    maxWidth: `${size}`
  }
}

export const breakpointStyleAuto: CSSObject = {
  width: 'auto',
  maxWidth: '100%',
  flex: '0 0 auto'
}

export const breakpointStyleEqual: CSSObject = {
  maxWidth: '100%',
  flexBasis: 0,
  flexGrow: 1
}
