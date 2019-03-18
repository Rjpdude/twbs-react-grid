import { Display, Elements, Flex } from '../'
import { translateElement, translateProperty } from '../util/Util'

describe('Translator', () => {
  it('Accurately ranslates an entire element', () => {
    const element: Partial<Elements.GridElement> = {
      // base properties
      size: 10,
      display: Display.InlineBlock,
      classNames: ['first', 'second', 'third'],

      // flex properties
      direction: Flex.Direction.Row,
      wrap: Flex.Wrap.Wrap,
      justifyContent: Flex.JustifyContent.Center,
      alignItems: Flex.AlignItems.End,
      alignContent: Flex.AlignContent.Around,
      alignSelf: Flex.AlignSelf.Baseline,
      order: 5,
      offset: 2,
      reverse: true,
      fill: true,
      grow: 1,
      shrink: 0,

      // margin
      m: 'auto',
      mT: 5,
      mB: 4,
      mY: 'auto',
      mL: 3,
      mR: 2,
      mX: 'auto',

      // padding
      p: 5,
      pT: 4,
      pB: 3,
      pY: 0,
      pL: 2,
      pR: 1,
      pX: 0,
    }

    const expectedTranslations = [
      'col-10',
      'd-inline-block',
      'first second third',
      'flex-row',
      'flex-wrap',
      'justify-content-center',
      'align-items-end',
      'align-content-around',
      'align-self-baseline',
      'order-5',
      'offset-2',
      'flex-row-reverse',
      'flex-fill',
      'flex-grow-1',
      'flex-shrink-0',
      'm-auto',
      'mt-5',
      'mb-4',
      'my-auto',
      'ml-3',
      'mr-2',
      'mx-auto',
    ]

    const translation = translateElement(element as Elements.GridElement)
    expectedTranslations.forEach((expected) => expect(translation).toContain(expected))
  })

  it('Accurately translates a singular property', () => {
    const element: Partial<Elements.GridElement> = {
      display: Display.Table,
    }

    const translatedProperty = translateProperty(element as Elements.GridElement, 'display')
    expect(translatedProperty).toBe('d-table')
  })

  it('Accurately translates a sized property', () => {
    const element: Partial<Elements.GridElement> = {
      size: 12,
    }

    const translatedProperty = translateProperty(element as Elements.GridElement, 'size', '-sm')
    expect(translatedProperty).toBe('col-sm-12')
  })
})
