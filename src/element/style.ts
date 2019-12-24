import { mapPropertyStyle } from './util'

export type BaseFlexVal<T> = T | 'start' | 'end' | 'center'

export type GridElementDisplayProperty =
  | 'none'
  | 'inline'
  | 'block'
  | 'inline-block'
  | 'table'
  | 'table-row'
  | 'table-cell'
  | 'flex'
  | 'inline-flex'

export const display = mapPropertyStyle<'display'>(undefined, [
  'none',
  'inline',
  'block',
  'inline-block',
  'table',
  'table-row',
  'table-cell',
  'flex',
  'inline-flex'
])

export type GridElementDirectionProperty =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'

export const direction = mapPropertyStyle<'direction'>('flexDirection', [
  'row',
  'row-reverse',
  'column',
  'column-reverse'
])

export type GridElementJustifyContentProperty = BaseFlexVal<
  'between' | 'around' | 'evenly'
>

export const justifyContent = mapPropertyStyle<'justifyContent'>(
  (val) => ({
    justifyContent:
      val === 'center'
        ? 'center'
        : val === 'start' || val === 'end'
        ? `flex-${val}`
        : `space-${val}`
  }),
  ['start', 'end', 'center', 'between', 'around', 'evenly']
)

export type GridElementAlignContentProperty = BaseFlexVal<
  'between' | 'around' | 'stretch'
>

export const alignContent = mapPropertyStyle<'alignContent'>(
  (val) => ({
    alignContent:
      val === 'start' || val === 'end'
        ? `flex-${val}`
        : val === 'between' || val === 'around'
        ? `space-${val}`
        : val
  }),
  ['start', 'end', 'center', 'between', 'around', 'stretch']
)

export type GridElementAlignItemsProperty = BaseFlexVal<'baseline' | 'stretch'>

export const alignItems = mapPropertyStyle<'alignItems'>(
  (val) => ({
    alignItems: val === 'start' || val === 'end' ? `flex-${val}` : val
  }),
  ['start', 'end', 'center', 'baseline', 'stretch']
)

export type GridElementAlignSelfProperty = BaseFlexVal<
  'auto' | 'baseline' | 'stretch'
>

export const alignSelf = mapPropertyStyle<'alignSelf'>(
  (val) => ({
    alignSelf: val === 'start' || val === 'end' ? `flex-${val}` : val
  }),
  ['start', 'end', 'center', 'auto', 'baseline', 'stretch']
)

export type GridElementOrderProperty =
  | 'first'
  | 'last'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12

export const order = mapPropertyStyle<'order'>(
  (val) => ({
    order: val === 'first' ? -1 : val === 'last' ? 13 : val
  }),
  ['first', 'last', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
)

export type GridElementOffsetProperty =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11

export const offset = mapPropertyStyle<'offset'>(
  (val) => ({
    marginLeft: (100 / 12) * val
  }),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
)

export type GridElementWrapProperty = boolean | 'reverse'

export const wrap = mapPropertyStyle<'wrap'>(
  (val) => ({
    flexWrap: val === true ? 'wrap' : val === false ? 'nowrap' : 'wrap-reverse'
  }),
  [true, false, 'reverse']
)

export type GridElementGrowthProperty = 0 | 1

export const grow = mapPropertyStyle<'grow'>('flexGrow', [0, 1])

export const shrink = mapPropertyStyle<'shrink'>('flexShrink', [0, 1])

export const fill = mapPropertyStyle<'fill'>(
  (val) =>
    val === true && {
      flex: '1 1 auto'
    },
  [true, false]
)
