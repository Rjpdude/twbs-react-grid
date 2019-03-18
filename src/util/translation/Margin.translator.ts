import { Translator } from '../../'

const MarginTranslator: Translator = {
  translateProperty: (breakPoint, property, element) => {
    switch (property) {
      case 'margin':
        return `m${breakPoint}-${element.margin}`
      case 'marginTop':
        return `mt${breakPoint}-${element.marginTop}`
      case 'marginBottom':
        return `mb${breakPoint}-${element.marginBottom}`
      case 'marginLeft':
        return `ml${breakPoint}-${element.marginLeft}`
      case 'marginRight':
        return `mr${breakPoint}-${element.marginRight}`
    }
    return ''
  },
}

export default MarginTranslator
