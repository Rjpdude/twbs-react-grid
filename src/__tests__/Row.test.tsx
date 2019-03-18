import { shallow } from 'enzyme'
import React from 'react'
import { Display, Flex, Row } from '../'

describe('Grid Row', () => {
  it('Render a grid row with children', () => {
    const row = shallow(
      <Row>
        <p>Children</p>
      </Row>,
    )
    expect(row.hasClass('row')).toBeTruthy()
    expect(row.text()).toBe('Children')
  })

  it('Render a grid row without gutters', () => {
    const row = shallow(<Row noGutters={true} />)
    expect(row.hasClass('row')).toBeTruthy()
    expect(row.hasClass('no-gutters')).toBeTruthy()
  })

  it('Render a grid row with custom classes', () => {
    const customClasses = ['testing', 'testingTwo', 'testingThree']
    const row = shallow(<Row classNames={customClasses} />)
    customClasses.forEach((className) => expect(row.hasClass(className)).toBeTruthy())
  })

  it('Renders a grid row with flex properties', () => {
    const flexProps = {
      direction: Flex.Direction.Row,
      justifyContent: Flex.JustifyContent.Center,
      alignSelf: Flex.AlignSelf.End,
    }

    const row = shallow(<Row {...flexProps} />)
    expect(row.hasClass('flex-row')).toBeTruthy()
    expect(row.hasClass('justify-content-center')).toBeTruthy()
    expect(row.hasClass('align-self-end')).toBeTruthy()
  })

  it('Renders a hidden row', () => {
    const row = shallow(<Row display={Display.None} />)
    expect(row.hasClass('d-none')).toBeTruthy()
  })
})
