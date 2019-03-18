import { Translator } from '../../'

const ElementTranslator: Translator = {
  translateProperty: (breakPoint, property, element) => {
    switch (property) {
      case 'size':
        return `col${breakPoint}${element.size === 'equal' ? '' : `-${element.size}`}`
      case 'display':
        return `d${breakPoint}-${element.display}`
      case 'classNames':
        return Array.isArray(element.classNames) ? element.classNames.join(' ') : element.classNames
    }
    return ''
  },
}

export default ElementTranslator
