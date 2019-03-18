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
      margin: 'auto',
      marginTop: 5,
      marginBottom: 4,
      marginLeft: 3,
      marginRight: 2,

      // padding
      padding: 5,
      paddingTop: 4,
      paddingBottom: 3,
      paddingLeft: 2,
      paddingRight: 1,
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
