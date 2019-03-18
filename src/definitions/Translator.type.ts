import * as Elements from './Element.type'

export default interface Translator {
  translateProperty: (breakPoint: string, property: keyof Elements.GridElement, element: Elements.GridElement) => string
}
