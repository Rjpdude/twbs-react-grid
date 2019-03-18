import { Translator } from '../'

import ElementTranslator from './translation/Element.translator'
import FlexTranslator from './translation/Flex.translator'
import MarginTranslator from './translation/Margin.translator'
import PaddingTranslator from './translation/Padding.translator'

const Translators: Translator[] = [ElementTranslator, FlexTranslator, MarginTranslator, PaddingTranslator]

export default Translators
