import { cloneElement, ReactElement } from 'react'
import { CSSObject } from 'styled-components'
import { configureElement } from '../element/element'
import { GridElement } from '../element/interface'
import { ThemeOptions } from '../theme/options'
import { Col } from './col'

export interface RowProps {
  /**
   * When false, the row's margin along with the padding of child columns are disabled.
   *
   * @see https://getbootstrap.com/docs/4.4/layout/grid/#no-gutters
   * @default true
   */
  gutters: boolean
  /**
   * The number of columns (between 1 and 6) to render per row.
   *
   * @see https://getbootstrap.com/docs/4.4/layout/grid/#row-columns
   */
  cols: RowColsVal
  /**
   * The number of columns (between 1 and 6) to render per row at the `small` breakpoint.
   *
   * @see https://getbootstrap.com/docs/4.4/layout/grid/#row-columns
   */
  cols_sm: RowColsVal
  /**
   * The number of columns (between 1 and 6) to render per row at the `medium` breakpoint.
   *
   * @see https://getbootstrap.com/docs/4.4/layout/grid/#row-columns
   */
  cols_md: RowColsVal
  /**
   * The number of columns (between 1 and 6) to render per row at the `large` breakpoint.
   *
   * @see https://getbootstrap.com/docs/4.4/layout/grid/#row-columns
   */
  cols_lg: RowColsVal
  /**
   * The number of columns (between 1 and 6) to render per row at the `extra large` breakpoint.
   *
   * @see https://getbootstrap.com/docs/4.4/layout/grid/#row-columns
   */
  cols_xl: RowColsVal
  /**
   * The element properties to assign to child columns.
   */
  col_props: RowColProps
  /**
   * The element properties to assign to child columns at the `small` breakpoint.
   */
  col_props_sm: RowColProps
  /**
   * The element properties to assign to child columns at the `medium` breakpoint.
   */
  col_props_md: RowColProps
  /**
   * The element properties to assign to child columns at the `large` breakpoint.
   */
  col_props_lg: RowColProps
  /**
   * The element properties to assign to child columns at the `extra large` breakpoint.
   */
  col_props_xl: RowColProps
}

export type RowColsVal = 1 | 2 | 3 | 4 | 5 | 6
export type RowColProps = Omit<GridElement<{}>, 'order'>

export const rowPropKeys = [
  'gutters',
  'cols',
  'cols_sm',
  'cols_md',
  'cols_lg',
  'cols_xl',
  'col_props',
  'col_props_sm',
  'col_props_md',
  'col_props_lg',
  'col_props_xl'
]

export const Row = configureElement<RowProps>(
  'twbs-grid-row', ({ ownProps, themeProps }) => {
    const rowStyle = initialRowStyle(themeProps, ownProps.gutters === false)

    if (ownProps.gutters === false) {
      rowStyle[`> ${Col.styledComponent}`] = noGutterStyle
    }

    return rowStyle
  },
  rowPropKeys,
  rowChildMapper
)

export function rowChildMapper(child: ReactElement<any, any>, props: RowProps) {
  return !child?.type?.styledComponent
    ? child
    : cloneElement(
        child,
        Object.keys(props).reduce(
          (childProps, propKey) => {
            return propKey.startsWith('cols')
              ? assignColSize(propKey, props[propKey], childProps)
              : propKey.startsWith('col_props')
              ? assignColProp(propKey, props[propKey], childProps)
              : childProps
          },
          { ...child.props }
        )
      )
}

export function assignColSize(key: string, val: number, columnProps: any) {
  const propKey = key === 'cols' ? 'size' : key.substr(5)
  const size = val === 5 ? '20%' : 12 / val

  if (!columnProps[propKey]) {
    columnProps[propKey] = size
  } else if (
    typeof columnProps[propKey] === 'object' &&
    !columnProps[propKey].size
  ) {
    columnProps[propKey] = {
      ...columnProps[propKey],
      size
    }
  }
  return columnProps
}

export function assignColProp(key: string, val: any, columnProps: any) {
  const propKey = key !== 'col_props' && key.substr(10)
  const target = !propKey ? columnProps : columnProps[propKey]

  if (!target) {
    columnProps[propKey] = val
  } else if (typeof target === 'object') {
    Object.keys(val).forEach((elemKey) => {
      if (!target[elemKey]) {
        target[elemKey] = val[elemKey]
      }
    })
  } else if (typeof target === 'string' || typeof target === 'number') {
    columnProps[propKey] = {
      ...val,
      size: target
    }
  }
  return columnProps
}

function initialRowStyle(
  { spacing }: ThemeOptions,
  noGutters: boolean
): CSSObject {
  const margin = noGutters ? 0 : `-${spacing}px`
  return {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: margin,
    marginRight: margin
  }
}

const noGutterStyle: CSSObject = {
  paddingLeft: 0,
  paddingRight: 0
}
