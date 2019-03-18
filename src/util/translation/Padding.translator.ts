import { Translator } from '../../'

const PaddingTranslator: Translator = {
  translateProperty: (breakPoint, property, element) => {
    switch (property) {
      case 'padding':
        return `p${breakPoint}-${element.margin}`
      case 'paddingTop':
        return `pt${breakPoint}-${element.margin}`
      case 'paddingBottom':
        return `pb${breakPoint}-${element.margin}`
      case 'paddingLeft':
        return `pl${breakPoint}-${element.margin}`
      case 'paddingRight':
        return `pr${breakPoint}-${element.margin}`
    }
    return ''
  },
}

export default PaddingTranslator
