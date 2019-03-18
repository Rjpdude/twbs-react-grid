import { shallow } from 'enzyme'
import React from 'react'
import { Col, Display, Flex } from '../'

describe('Grid column', () => {
  it('Renders a grid column with default properties', () => {
    const col = shallow(<Col />)
    expect(col.hasClass('col'))
  })

  it('Renders a grid column with different breakpoints', () => {
    const col = shallow(<Col size="auto" sm={12} md={6} lg={4} xl={3} />)
    expect(col.hasClass('col-auto'))
    expect(col.hasClass('col-sm-12'))
    expect(col.hasClass('col-md-6'))
    expect(col.hasClass('col-lg-4'))
    expect(col.hasClass('col-xl-3'))
  })

  it('Renders a grid column with different flexed breakpoints and a custom class', () => {
    const col = shallow(
      <Col
        size={12}
        sm={{ size: 6, order: 2, justifyContent: Flex.JustifyContent.Center }}
        md={{ size: 4, order: 2, justifyContent: Flex.JustifyContent.Between }}
        lg={{ size: 3, order: 1, justifyContent: Flex.JustifyContent.End, wrap: Flex.Wrap.Reverse }}
        xl={{ display: Display.None }}
        classNames="a-special-column-from-outter-space"
      />,
    )

    expect(col.hasClass('col-12'))

    expect(col.hasClass('col-sm-6'))
    expect(col.hasClass('order-sm-2'))
    expect(col.hasClass('justify-content-sm-center'))

    expect(col.hasClass('col-md-4'))
    expect(col.hasClass('order-md-2'))
    expect(col.hasClass('justify-content-md-between'))

    expect(col.hasClass('col-lg-3'))
    expect(col.hasClass('order-lg-1'))
    expect(col.hasClass('justify-content-lg-end'))
    expect(col.hasClass('flex-lg-reverse'))

    expect(col.hasClass('d-xl-none'))

    expect(col.hasClass('a-special-column-from-outter-space'))
  })
})
