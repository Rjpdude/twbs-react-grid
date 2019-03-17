import React from 'react'
import { Row, Col } from 'beacon-react-components/src/components/grid/Grid'
import { VERTICAL_ALIGN } from 'beacon-react-components/src/components/grid/GridTypes'
import { mount } from 'enzyme'

describe('Grid Column', () => {
  it('Renders a grid column with children and default props', () => {
    const column = mount(
      <Col>
        <p>Child</p>
      </Col>,
    )

    expect(column.childAt(0).hasClass('col-12')).toBeTruthy()
    expect(column.text()).toBe('Child')
  })

  it('Renders a grid column with various numeric column sizing', () => {
    const column = mount(<Col xs={6} sm={4} md={3} lg={2} xl={1} />)
    expect(column.childAt(0).hasClass('col-6')).toBeTruthy()
    expect(column.childAt(0).hasClass('col-sm-4')).toBeTruthy()
    expect(column.childAt(0).hasClass('col-md-3')).toBeTruthy()
    expect(column.childAt(0).hasClass('col-lg-2')).toBeTruthy()
    expect(column.childAt(0).hasClass('col-xl-1')).toBeTruthy()
  })

  it('Renders a grid column with a custom class as a string', () => {
    const column = mount(<Col classNames="test-class" />)
    expect(column.childAt(0).hasClass('test-class')).toBeTruthy()
  })

  it('Renders a grid column with a custom class as an array of strings', () => {
    const columnClasses = ['test-class1', 'test-class2', 'test-class3']
    const column = mount(<Col classNames={columnClasses} />)
    columnClasses.forEach((className) => expect(column.childAt(0).hasClass(className)).toBeTruthy())
  })

  it('Renders a vertically aligned column', () => {
    const column = mount(<Col xs={{ size: 12, verticalAlign: VERTICAL_ALIGN.CENTER }} />)
    expect(column.childAt(0).hasClass('align-self-center')).toBeTruthy()
  })

  it('Renders ordered columns', () => {
    const column = mount(
      <Row>
        <Col xs={{ size: 4, order: 3 }} md={{ size: 12, order: 'last' }} />
        <Col xs={{ size: 4, order: 'first' }} md={{ size: 12, order: 2 }} />
        <Col xs={{ size: 4, order: 2 }} md={{ size: 12, order: 'first' }} />
      </Row>,
    )

    const firstColumn = column
      .find(Col)
      .at(0)
      .childAt(0)
    ;['col-4', 'order-3', 'col-md-12', 'order-md-last'].forEach((className) =>
      expect(firstColumn.hasClass(className)).toBeTruthy(),
    )

    const secondColumn = column
      .find(Col)
      .at(1)
      .childAt(0)
    ;['col-4', 'order-first', 'col-md-12', 'order-md-2'].forEach((className) =>
      expect(secondColumn.hasClass(className)).toBeTruthy(),
    )

    const thirdColumn = column
      .find(Col)
      .at(2)
      .childAt(0)
    ;['col-4', 'order-2', 'col-md-12', 'order-md-first'].forEach((className) =>
      expect(thirdColumn.hasClass(className)).toBeTruthy(),
    )
  })
})
