import { shallow } from 'enzyme'
import React from 'react'
import { Container, Display, Flex } from '../'

describe('Grid Container', () => {
  it('Render a grid container with children', () => {
    const container = shallow(
      <Container>
        <p>Children</p>
      </Container>,
    )
    expect(container.hasClass('container')).toBeTruthy()
    expect(container.text()).toBe('Children')
  })

  it('Render a fluid grid container with children', () => {
    const container = shallow(
      <Container fluid={true}>
        <p>Children</p>
      </Container>,
    )
    expect(container.hasClass('container-fluid')).toBeTruthy()
    expect(container.text()).toBe('Children')
  })

  it('Renders a container with custom classes', () => {
    const customClasses = ['testing', 'testingTwo', 'testingThree']
    const container = shallow(<Container classNames={customClasses} />)
    customClasses.forEach((className) => expect(container.hasClass(className)).toBeTruthy())
  })

  it('Renders a container with flex properties', () => {
    const flexProps = {
      direction: Flex.Direction.Row,
      justifyContent: Flex.JustifyContent.Center,
      alignSelf: Flex.AlignSelf.End,
    }

    const container = shallow(<Container {...flexProps} />)
    expect(container.hasClass('flex-row')).toBeTruthy()
    expect(container.hasClass('justify-content-center')).toBeTruthy()
    expect(container.hasClass('align-self-end')).toBeTruthy()
  })

  it('Renders a hidden row', () => {
    const container = shallow(<Container display={Display.None} />)
    expect(container.hasClass('d-none')).toBeTruthy()
  })
})
