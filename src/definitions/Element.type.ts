import ColumnSize from './ColumnSize.type'
import Display from './Display.type'
import { FlexProperties } from './Flex.type'
import { MarginProperties } from './Margin.type'
import { PaddingProperties } from './Padding.type'

type BaseElement = FlexProperties & MarginProperties & PaddingProperties

interface GridElement extends BaseElement {
  size: ColumnSize
  display: Display
  classNames: string | string[]
  children: JSX.Element | JSX.Element[]
}

type FixedElement = Pick<GridElement, Exclude<keyof GridElement, 'size'>>
type BreakPointElement = Pick<GridElement, Exclude<keyof GridElement, 'classNames' | 'children'>>

export { GridElement, FixedElement, BreakPointElement }
