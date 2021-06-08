import styled from 'styled-components'
import { useContext, createElement, Children } from 'react'
import { gridThemeContext } from '../theme/theme'
import { getElementPropertyStyle, isElementSpacingProp } from './util'
import * as gridPropertyStyleMap from './style'
import {
  GridElementStyleGenerator,
  GridElementComponent,
  GridElementContext,
  GridElementChildMapper
} from './interface'

const elementPropertyKeys = Object.keys(gridPropertyStyleMap)

export function configureElement<T>(
  elementType: string,
  styleGenerator: GridElementStyleGenerator<T>,
  propertyKeys: string[],
  childMap?: GridElementChildMapper<T>
): GridElementComponent<T> {
  const elementClassName = `twbs-grid-${elementType.toLowerCase()}`
  const styledElement = generateStyledElement(styleGenerator)

  const component = (props: any) => {
    const passThrouhProps = {}

    const gridElementContext = {
      themeProps: useContext(gridThemeContext),
      elementProps: {},
      ownProps: {}
    }

    Object.keys(props).forEach((key) => {
      if (propertyKeys.includes(key)) {
        gridElementContext.ownProps[key] = props[key]
      } else if (
        elementPropertyKeys.includes(key) ||
        isElementSpacingProp(key)
      ) {
        gridElementContext.elementProps[key] = props[key]
      } else {
        passThrouhProps[key] = props[key]
      }
    })

    const styledElementProps: any = {
      ...passThrouhProps,
      gridElementContext: () => gridElementContext
    }

    return createElement(
      styledElement,
      styledElementProps,
      !childMap
        ? props.children
        : Children.map(props.children, (child) =>
            childMap(child, gridElementContext.ownProps as T)
          )
    )
  }

  component.displayName = elementType
  component.styledComponent = styledElement
  
  return styled(component).attrs({ className: elementClassName })`` as any
}

function generateStyledElement<T>(
  styleGenerator: GridElementStyleGenerator<T>
) {
  return styled.div<{ gridElementContext: () => GridElementContext<T> }>((props) => {
    const context = props.gridElementContext()
    const ownStyle = styleGenerator(context)
    const elementPropKeys = Object.keys(context.elementProps)

    return elementPropKeys.reduce(
      (elementStyle, key) =>
        Object.assign(
          elementStyle,
          getElementPropertyStyle(
            gridPropertyStyleMap,
            key,
            context.elementProps[key]
          )
        ),
      ownStyle
    )
  })
}
