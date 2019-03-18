import { Translator } from '../../'

const PaddingTranslator: Translator = {
  translateProperty: (breakPoint, property, element) => {
    switch (property) {
      case 'p':
        return `p${breakPoint}-${element.p}`
      case 'pT':
        return `pt${breakPoint}-${element.pT}`
      case 'pB':
        return `pb${breakPoint}-${element.pB}`
      case 'pY':
        return `pY${breakPoint}-${element.pY}`
      case 'pL':
        return `pl${breakPoint}-${element.pL}`
      case 'pR':
        return `pr${breakPoint}-${element.pR}`
      case 'pX':
        return `px${breakPoint}-${element.pX}`
    }
    return ''
  },
}

export default PaddingTranslator
