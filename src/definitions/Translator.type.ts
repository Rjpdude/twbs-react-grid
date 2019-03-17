import { Elements } from '../Types'

export default interface Translator {
  translateProperty: (breakPoint: string, property: keyof Elements.GridElement, element: Elements.GridElement) => string
}
