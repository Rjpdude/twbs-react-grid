import styled from 'styled-components'
import { useContext, createElement } from 'react'
import { gridThemeContext } from '../theme/theme'
import { getElementPropertyStyle, isElementSpacingProp } from './util'
import * as gridPropertyStyleMap from './style'
import {
  GridElementStyleGenerator,
  GridElementComponent,
  GridElementContext
} from './interface'

const elementPropertyKeys = Object.keys(gridPropertyStyleMap)

export function configureElement<T>(
  styleGenerator: GridElementStyleGenerator<T>,
  propertyKeys: string[]
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

    return createElement(styledElement, styledElementProps, props.children)
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
