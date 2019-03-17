import React from 'react'
import { BreakPoint, ColumnSize, Elements, PropType } from '../Types'
import { translateElement, translateProperty } from '../util/Util'

const breakPoints = ['sm', 'md', 'lg', 'xl']

interface Props extends Elements.GridElement {
  sm: BreakPoint
  md: BreakPoint
  lg: BreakPoint
  xl: BreakPoint
}

const GridColumn = (props: PropType<Props>) => {
  const column = Object.keys(props).reduce(
    (list, propName) => {
      const property = props[propName as keyof Props] as Elements.GridElement
      const isBreakPoint = breakPoints.indexOf(propName) !== -1
      if (isBreakPoint) {
        const elementToTranslate =
          typeof property === 'object' ? property : ({ size: property as ColumnSize } as Elements.GridElement)
        list.push(...translateElement(elementToTranslate, `-${propName}`))
      } else {
        list.push(translateProperty(props as Elements.GridElement, propName as keyof Elements.GridElement))
      }
      return list
    },
    [] as string[],
  )

  return <div className={column.join(' ')}>{props.children}</div>
}

GridColumn.defaultProps = {
  size: 'equal',
} as Props

export default GridColumn
