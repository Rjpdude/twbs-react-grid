import React from 'react'
import { BreakPoint, ColumnSize, Elements, PropType } from '../'
import * as Util from '../util/Util'
import { jsxAttribute } from '@babel/types';

const breakPoints = ['sm', 'md', 'lg', 'xl']

interface Props extends Elements.GridElement {
  sm: BreakPoint
  md: BreakPoint
  lg: BreakPoint
  xl: BreakPoint
}

const GridColumn = (props: PropType<Props>) => {
  const DOMProps: React.HTMLAttributes<HTMLDivElement> = {}
  
  const column = Object.keys(props).reduce(
    (list, propName) => {
      const property = props[propName as keyof Props]
      const isBreakPoint = breakPoints.indexOf(propName) !== -1
      if (propName === 'className') {
        list.push(property as string)
      } else if (isBreakPoint) {
        const elementToTranslate =
          typeof property === 'object' ? property : ({ size: property as ColumnSize } as Elements.GridElement)
        list.push(...Util.translateElement(elementToTranslate, `-${propName}`).classNames)
      } else {
        const translatedProperty = Util.translateProperty(props as Elements.GridElement, propName as keyof Elements.GridElement)
        if (translatedProperty === '') {
          DOMProps[propName as keyof React.HTMLAttributes<HTMLDivElement>] = property
        } else {
          list.push(translatedProperty)
        }
      }
      return list
    },
    [] as string[],
  )

  return <div {...DOMProps} className={Util.joinElementProperties(column)}>{props.children}</div>
}

GridColumn.defaultProps = {
  size: 'equal',
} as Props

export default GridColumn
