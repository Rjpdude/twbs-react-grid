import { Elements } from '../'
import Translators from './Translators'

export const translateProperty = (
  element: Elements.GridElement,
  propertyName: keyof Elements.GridElement,
  breakPoint: string = '',
): string => {
  for (const T of Translators) {
    const translation = T.translateProperty(breakPoint, propertyName as keyof Elements.GridElement, element)
    if (translation !== '') {
      return translation
    }
  }
  return ''
}

export const translateElement = (element: Elements.GridElement, breakPoint: string = '') =>
  Object.keys(element).reduce(
    (list, propertyName) => {
      if (propertyName === 'className') {
        if (breakPoint === '') {
          list.classNames.push(element[propertyName as keyof Elements.GridElement])
        }
      } else {
        const translatedProperty = translateProperty(element, propertyName as keyof Elements.GridElement, breakPoint)
        if (translatedProperty !== '') {
          list.classNames.push(translatedProperty)
        } else if (propertyName !== 'fluid' && propertyName !== 'noGutters') {
          list.DOMProps[propertyName as keyof React.HTMLAttributes<HTMLDivElement>] = element[propertyName as keyof React.HTMLAttributes<HTMLDivElement>]
        }
      }
      return list
    },
    {classNames: [] as string[], DOMProps: {} as React.HTMLAttributes<HTMLDivElement> },
  )

export const joinElementProperties = (properties: string[]) => properties.join(' ').trim()
