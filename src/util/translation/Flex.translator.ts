import { Flex, Translator } from '../../'

const FlexTranslator: Translator = {
  translateProperty: (breakPoint, property, element) => {
    switch (property) {
      case 'direction':
        return `flex${breakPoint}-${element.direction}`
      case 'wrap':
        return `flex${breakPoint}-${element.wrap}`
      case 'justifyContent':
        return `justify-content${breakPoint}-${element.justifyContent}`
      case 'alignItems':
        return `align-items${breakPoint}-${element.alignItems}`
      case 'alignContent':
        return `align-content${breakPoint}-${element.alignContent}`
      case 'alignSelf':
        return `align-self${breakPoint}-${element.alignSelf}`
      case 'order':
        return `order${breakPoint}-${element.order}`
      case 'offset':
        return `offset${breakPoint}-${element.offset}`
      case 'reverse':
        return `flex${breakPoint}-${element.direction || Flex.Direction.Row}-reverse`
      case 'fill':
        return element.fill === true ? `flex${breakPoint}-fill` : ''
      case 'grow':
        return `flex${breakPoint}-grow-${element.grow}`
      case 'shrink':
        return `flex${breakPoint}-shrink-${element.shrink}`
    }
    return ''
  },
}

export default FlexTranslator
