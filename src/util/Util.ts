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

export const translateElement = (element: Elements.GridElement, breakPoint: string = ''): string[] =>
  Object.keys(element).reduce(
    (list, propertyName) => {
      const translatedProperty = translateProperty(element, propertyName as keyof Elements.GridElement, breakPoint)
      if (translatedProperty !== '') {
        list.push(translatedProperty)
      }
      return list
    },
    [] as string[],
  )

export const joinElementProperties = (properties: string[]) => properties.join(' ').trim()
