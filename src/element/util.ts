import { CSSObject } from 'styled-components'
import { GridElementStyleMapper, GridElementProperties } from './interface'

export const getElementPropertyStyle = (
  gridPropertyStyleMap: any,
  propertyKey: string,
  propertyValue: any
): CSSObject => {
  const propertyStyleFunc = isElementSpacingProp(propertyKey)
    ? mapSpacingStyle
    : gridPropertyStyleMap[propertyKey]

  const style =
    typeof propertyStyleFunc === 'function' &&
    propertyStyleFunc(propertyValue, propertyKey)

  return style || {}
}

export const mapPropertyStyle = <K extends keyof GridElementProperties>(
  styleMapper?: keyof CSSObject | GridElementStyleMapper<K>,
  allowedValues?: Array<GridElementProperties[K]>
): GridElementStyleMapper<K> => {
  return (val, propKey) => {
    if (verifyStyleValue(val, propKey, allowedValues)) {
      return typeof styleMapper === 'function'
        ? styleMapper(val, propKey)
        : ({
            [styleMapper || propKey]: val
          } as CSSObject)
    }
  }
}

export const mapSpacingStyle = mapPropertyStyle((spacingVal, spacingId) => {
  const baseId = spacingId.startsWith('m') ? 'margin' : 'padding'
  const suffix = spacingId.charAt(1)
  const val = typeof spacingVal === 'string' ? spacingVal : `${spacingVal}px`

  return suffix === 'X' || suffix === 'Y'
    ? {
        [`${baseId}${suffix === 'X' ? 'Top' : 'Right'}`]: val,
        [`${baseId}${suffix === 'X' ? 'Bottom' : 'Left'}`]: val
      }
    : {
        [!suffix
          ? baseId
          : `${baseId}${
              suffix === 'T'
                ? 'Top'
                : suffix === 'B'
                ? 'Bottom'
                : suffix === 'R'
                ? 'Right'
                : suffix === 'L'
                ? 'Left'
                : ''
            }`]: val
      }
})

export const verifyStyleValue = (
  value: any,
  propKey: string,
  allowedValues?: any[]
) => {
  const invalidVal =
    !['string', 'number', 'boolean'].includes(typeof value) ||
    allowedValues?.includes(value) === false

  if (invalidVal) {
    console.warn(
      `Invalid element prop value ${value} for '${propKey}' - expected ${
        !allowedValues ? 'string, number, boolean' : allowedValues.join(', ')
      }.`
    )
  }

  return !invalidVal
}

export const isElementSpacingProp = (propertyKey: string) =>
  propertyKey.length <= 2 &&
  (propertyKey.startsWith('m') || propertyKey.startsWith('p'))
