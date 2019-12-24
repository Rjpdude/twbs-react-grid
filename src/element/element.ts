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
  styleGenerator: GridElementStyleGenerator<T>,
  propertyKeys: string[],
  childMap?: GridElementChildMapper<T>
): GridElementComponent<T> {
  const styledElement = generateStyledElement(styleGenerator)

  const component = (props) => {
    const styledElementProps = {
      themeProps: useContext(gridThemeContext),
      elementProps: {},
      ownProps: {}
    }

    Object.keys(props).forEach((key) => {
      if (propertyKeys.includes(key)) {
        styledElementProps.ownProps[key] = props[key]
      } else if (
        elementPropertyKeys.includes(key) ||
        isElementSpacingProp(key)
      ) {
        styledElementProps.elementProps[key] = props[key]
      } else if (key !== 'children') {
        styledElementProps[key] = props[key]
      }
    })

    return createElement(
      styledElement,
      styledElementProps,
      !childMap
        ? props.children
        : Children.map(props.children, (child) =>
            childMap(child, styledElementProps.ownProps as T)
          )
    )
  }

  component.styledComponent = styledElement
  return component
}

function generateStyledElement<T>(
  styleGenerator: GridElementStyleGenerator<T>
) {
  return styled.div<GridElementContext<T>>((props) => {
    const ownStyle = styleGenerator(props)
    const elementPropKeys = Object.keys(props.elementProps)

    return elementPropKeys.reduce(
      (elementStyle, key) =>
        Object.assign(
          elementStyle,
          getElementPropertyStyle(
            gridPropertyStyleMap,
            key,
            props.elementProps[key]
          )
        ),
      ownStyle
    )
  })
}
