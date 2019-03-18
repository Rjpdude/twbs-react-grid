import { Translator } from '../../'

const MarginTranslator: Translator = {
  translateProperty: (breakPoint, property, element) => {
    switch (property) {
      case 'm':
        return `m${breakPoint}-${convertMarginValue(element.m)}`
      case 'mT':
        return `mt${breakPoint}-${convertMarginValue(element.mT)}`
      case 'mB':
        return `mb${breakPoint}-${convertMarginValue(element.mB)}`
      case 'mY':
        return `my${breakPoint}-${convertMarginValue(element.mY)}`
      case 'mL':
        return `ml${breakPoint}-${convertMarginValue(element.mL)}`
      case 'mR':
        return `mr${breakPoint}-${convertMarginValue(element.mR)}`
      case 'mX':
        return `mx${breakPoint}-${convertMarginValue(element.mX)}`
    }
    return ''
  },
}

const convertMarginValue = (value: string | number) =>
  typeof value === 'string' || value > 0 ? value : `n${value * -1}`

export default MarginTranslator
