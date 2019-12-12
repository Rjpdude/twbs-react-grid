import { CSSObject } from 'styled-components'
import { GridElementStyleMapper, GridElementProperties } from './interface'

export function getElementPropertyStyle(
  gridPropertyStyleMap: any,
  propertyKey: string,
  propertyValue: any
): CSSObject {
  const propertyStyleFunc = isElementSpacingProp(propertyKey)
    ? mapSpacingStyle
    : gridPropertyStyleMap[propertyKey]

  const style =
    typeof propertyStyleFunc === 'function' &&
    propertyStyleFunc(propertyValue, propertyKey)

  return style || {}
}

export function mapPropertyStyle<K extends keyof GridElementProperties>(
  styleMapper?: keyof CSSObject | GridElementStyleMapper<K>,
  allowedValues?: Array<GridElementProperties[K]>
): GridElementStyleMapper<K> {
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
        [`${baseId}-${suffix === 'X' ? 'top' : 'right'}`]: val,
        [`${baseId}-${suffix === 'X' ? 'bottom' : 'left'}`]: val
      }
    : {
        [!suffix
          ? baseId
          : `${baseId}-${
              suffix === 'T'
                ? 'top'
                : suffix === 'B'
                ? 'bottom'
                : suffix === 'R'
                ? 'right'
                : suffix === 'L'
                ? 'left'
                : ''
            }`]: val
      }
})

export function isElementSpacingProp(propertyKey: string) {
  return (
    propertyKey.length <= 2 &&
    (propertyKey.startsWith('m') || propertyKey.startsWith('p'))
  )
}

export function verifyStyleValue(
  value: any,
  propKey: string,
  allowedValues?: any[]
) {
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
