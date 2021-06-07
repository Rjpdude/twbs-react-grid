import { ReactNode, HTMLAttributes } from 'react'
import { StyledComponent, CSSObject } from 'styled-components'
import { ThemeOptions } from '../theme/options'
import * as StyleMap from './style'

export type GridElement<T> = Partial<T & GridElementProperties>
export type GridElementComponent<T> = StyledComponent<'div', any, GridElement<T>>

export interface GridElementContext<T> extends HTMLAttributes<HTMLDivElement> {
  themeProps: ThemeOptions
  elementProps: Partial<GridElementProperties>
  ownProps: Partial<T>
}

export type GridElementStyleGenerator<T> = (
  context: GridElementContext<T>
) => CSSObject

export type GridElementStyleMapper<K extends keyof GridElementProperties> = (
  val: GridElementProperties[K],
  key?: K
) => CSSObject

export type GridElementChildMapper<T> = (
  child: ReactNode,
  props: T
) => ReactNode

export type GridElementProperties = GridElementStyleProperties &
  GridElementSpacingProperties

export type GridElementSpacingProperties = GridElementMarginProperties &
  GridElementPaddingProperties

export interface GridElementStyleProperties {
  /**
   * Grid element CSS `display` property.
   *
   * `none` `inline` `block` `inline-block` `table` `table-row` `table-cell` `flex` `inline-flex`
   */
  display: StyleMap.GridElementDisplayProperty
  /**
   * Grid element CSS `flexDirection` property.
   *
   * `row` `row-reverse` `column` `column-reverse`
   */
  direction: StyleMap.GridElementDirectionProperty
  /**
   * Grid element CSS `justifyContent` property.
   *
   * `start` `end` `center` `between` `around` `evenly`
   */
  justifyContent: StyleMap.GridElementJustifyContentProperty
  /**
   * Grid element CSS `alignContent` property.
   *
   * `start` `end` `center` `between` `around` `stretch`
   */
  alignContent: StyleMap.GridElementAlignContentProperty
  /**
   * Grid element CSS `alignItems` property.
   *
   * `start` `end` `center` `baseline` `stretch`
   */
  alignItems: StyleMap.GridElementAlignItemsProperty
  /**
   * Grid element CSS `alignSelf` property.
   *
   * `start` `end` `center` `auto` `baseline` `stretch`
   */
  alignSelf: StyleMap.GridElementAlignSelfProperty
  /**
   * Grid element CSS `order` property.
   *
   * `first` `last` `0 - 12`
   */
  order: StyleMap.GridElementOrderProperty
  /**
   * Offset a column element by a breakpoint size value.
   *
   * `1 - 12`
   */
  offset: StyleMap.GridElementOffsetProperty
  /**
   * Grid element CSS `flexWrap` property.
   *
   * `true/false` or `reverse`
   */
  wrap: StyleMap.GridElementWrapProperty
  /**
   * Grid element CSS `flexGrow` property.
   *
   * `0` or `1`
   */
  grow: StyleMap.GridElementGrowthProperty
  /**
   * Grid element CSS `flexShrink` property.
   *
   * `0` or `1`
   */
  shrink: StyleMap.GridElementGrowthProperty
  /**
   * Whether to fill the flex element.
   *
   * `true/false`
   */
  fill: boolean
}

type SpacingVal = number | string

export interface GridElementMarginProperties {
  /**
   * Margin (across all axis)
   */
  m: SpacingVal
  /**
   * Margin (left / right)
   */
  mX: SpacingVal
  /**
   * Margin (top / bottom)
   */
  mY: SpacingVal
  /**
   * Margin (top)
   */
  mT: SpacingVal
  /**
   * Margin (bottom)
   */
  mB: SpacingVal
  /**
   * Margin (right)
   */
  mR: SpacingVal
  /**
   * Margin (left)
   */
  mL: SpacingVal
}

export interface GridElementPaddingProperties {
  /**
   * Padding (across all axis)
   */
  p: SpacingVal
  /**
   * Padding (left / right)
   */
  pX: SpacingVal
  /**
   * Padding (top / bottom)
   */
  pY: SpacingVal
  /**
   * Padding (top)
   */
  pT: SpacingVal
  /**
   * Padding (bottom)
   */
  pB: SpacingVal
  /**
   * Padding (right)
   */
  pR: SpacingVal
  /**
   * Padding (left)
   */
  pL: SpacingVal
}
