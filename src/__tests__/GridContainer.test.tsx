import React from 'react'
import { Container } from 'beacon-react-components/src/components/grid/Grid'
import { mount } from 'enzyme'

describe('Grid Container', () => {
  it('Render a grid container with children', () => {
    const container = mount(
      <Container>
        <p>Children</p>
      </Container>,
    )
    expect(container.childAt(0).hasClass('container')).toBeTruthy()
    expect(container.text()).toBe('Children')
  })

  it('Render a fluid grid container with children', () => {
    const container = mount(
      <Container fluid={true}>
        <p>Children</p>
      </Container>,
    )
    expect(container.childAt(0).hasClass('container-fluid')).toBeTruthy()
    expect(container.text()).toBe('Children')
  })
})
