import { cloneElement, ReactElement } from 'react'
import { CSSObject } from 'styled-components'
import { configureElement } from '../element/element'
import { GridElement } from '../element/interface'
import { ThemeOptions } from '../theme/options'
import { Col, BreakpointVal } from './col'

export type RowColProps = Omit<GridElement<{}>, 'order'>

export interface RowProps {
  colSize: BreakpointVal
  colSizeSm: BreakpointVal
  colSizeMd: BreakpointVal
  colSizeLg: BreakpointVal
  colSizeXl: BreakpointVal

  colProps: RowColProps
  colPropsSm: RowColProps
  colPropsMd: RowColProps
  colPropsLg: RowColProps
  colPropsXl: RowColProps

  /**
   * When false, the row's margin along with the padding of child columns are disabled.
   *
   * @see https://getbootstrap.com/docs/4.4/layout/grid/#no-gutters
   * @default true
   */
  gutters: boolean
}

export const rowPropKeys = [
  'colSize',
  'colSizeSm',
  'colSizeMd',
  'colSizeLg',
  'colSizeXl',
  'colProps',
  'colPropsSm',
  'colPropsMd',
  'colPropsLg',
  'colPropsXl',
  'gutters'
]

export const Row = configureElement<RowProps>(
  ({ ownProps, themeProps }) => {
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
  if (!child.type?.styledComponent) {
    return child
  }

  const colSizeProps = Object.keys(props).filter((propKey) =>
    propKey.startsWith('colSize')
  )

  const toAssign = colSizeProps.reduce(
    (childProps, propKey) => {
      const colSizeVal =
        props[propKey] === 'equal' || props[propKey] === 'auto'
          ? props[propKey]
          : 12 / props[propKey]

      const colPropKey =
        propKey === 'colSize' ? 'size' : propKey.substr(7).toLowerCase()

      if (!childProps[colPropKey]) {
        childProps[colPropKey] = colSizeVal
      } else if (
        typeof childProps[colPropKey] === 'object' &&
        !childProps[colPropKey].size
      ) {
        childProps[colPropKey] = {
          ...childProps[colPropKey],
          size: colSizeVal
        }
      }

      return childProps
    },
    { ...child.props }
  )

  const colProps = Object.keys(props).filter((propKey) =>
    propKey.startsWith('colProps')
  )

  colProps.forEach((propKey) => {
    const colProp = props[propKey]
    const colPropKey = propKey.substr(8).toLowerCase()
    const target = colPropKey === '' ? toAssign : toAssign[colPropKey]

    if (!target) {
      toAssign[colPropKey] = {
        [propKey]: colProp
      }
    } else if (typeof target === 'object') {
      Object.keys(colProp).forEach((elemKey) => {
        if (!target[elemKey]) {
          target[elemKey] = colProp[elemKey]
        }
      })
    } else if (typeof target === 'string' || typeof target === 'number') {
      toAssign[colPropKey] = {
        ...colProp,
        size: target
      }
    }
  })

  return cloneElement(child, toAssign)
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
