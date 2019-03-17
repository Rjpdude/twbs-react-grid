import Offset from './Offset.type'
import Order from './Order.type'

export interface FlexProperties {
  direction: Direction
  wrap: Wrap
  justifyContent: JustifyContent
  alignItems: AlignItems
  alignContent: AlignContent
  alignSelf: AlignSelf
  order: Order
  offset: Offset
  reverse: boolean
  fill: boolean
  grow: 0 | 1
  shrink: 0 | 1
}

export enum Direction {
  Row = 'row',
  Column = 'column',
}

export enum AlignSelf {
  Auto = 'auto',
  Start = 'start',
  End = 'end',
  Center = 'center',
  Baseline = 'baseline',
  Stretch = 'stretch',
}

export enum AlignContent {
  Start = 'start',
  End = 'end',
  Center = 'center',
  Between = 'between',
  Around = 'around',
  Stretch = 'stretch',
}

export enum AlignItems {
  Start = 'start',
  End = 'end',
  Center = 'center',
  Baseline = 'baseline',
  Stretch = 'stretch',
}

export enum JustifyContent {
  Start = 'start',
  End = 'end',
  Center = 'center',
  Between = 'between',
  Around = 'around',
}

export enum Wrap {
  Wrap = 'wrap',
  NoWrap = 'nowrap',
  Reverse = 'wrap-reverse',
}
