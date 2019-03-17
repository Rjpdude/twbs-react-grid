import React from 'react'
import { Row } from 'beacon-react-components/src/components/grid/Grid'
import { VERTICAL_ALIGN, HORIZONTAL_ALIGN } from 'beacon-react-components/src/components/grid/GridTypes'
import { mount } from 'enzyme'

describe('Grid Row', () => {
  it('Render a grid row with children', () => {
    const row = mount(
      <Row>
        <p>Children</p>
      </Row>,
    )
    expect(row.childAt(0).hasClass('row')).toBeTruthy()
    expect(row.text()).toBe('Children')
  })

  it('Renders a grid row with vertical alignments', () => {
    const generateRow = (verticalAlignment: VERTICAL_ALIGN) =>
      mount(
        <Row verticalAlign={verticalAlignment}>
          <p>Children</p>
        </Row>,
      )

    expect(
      generateRow(VERTICAL_ALIGN.TOP)
        .childAt(0)
        .hasClass('align-items-start'),
    ).toBeTruthy()

    expect(
      generateRow(VERTICAL_ALIGN.CENTER)
        .childAt(0)
        .hasClass('align-items-center'),
    ).toBeTruthy()

    expect(
      generateRow(VERTICAL_ALIGN.BOTTOM)
        .childAt(0)
        .hasClass('align-items-end'),
    ).toBeTruthy()
  })

  it('Renders a grid row with horizontal alignments', () => {
    const generateRow = (horizontalAlignment: HORIZONTAL_ALIGN) =>
      mount(
        <Row horizontalAlign={horizontalAlignment}>
          <p>Children</p>
        </Row>,
      )

    expect(
      generateRow(HORIZONTAL_ALIGN.LEFT)
        .childAt(0)
        .hasClass('justify-content-start'),
    ).toBeTruthy()

    expect(
      generateRow(HORIZONTAL_ALIGN.RIGHT)
        .childAt(0)
        .hasClass('justify-content-end'),
    ).toBeTruthy()

    expect(
      generateRow(HORIZONTAL_ALIGN.CENTER)
        .childAt(0)
        .hasClass('justify-content-center'),
    ).toBeTruthy()

    expect(
      generateRow(HORIZONTAL_ALIGN.AROUND)
        .childAt(0)
        .hasClass('justify-content-around'),
    ).toBeTruthy()

    expect(
      generateRow(HORIZONTAL_ALIGN.BETWEEN)
        .childAt(0)
        .hasClass('justify-content-between'),
    ).toBeTruthy()
  })

  it('Renders a grid with a horizontal and vertical alignment', () => {
    const row = mount(
      <Row horizontalAlign={HORIZONTAL_ALIGN.CENTER} verticalAlign={VERTICAL_ALIGN.BOTTOM}>
        <p>Children</p>
      </Row>,
    )

    expect(row.childAt(0).hasClass('justify-content-center')).toBeTruthy()
    expect(row.childAt(0).hasClass('align-items-end')).toBeTruthy()
  })
})
