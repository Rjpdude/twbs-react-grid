import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'
import { GridTheme } from '../theme/theme'
import { Col } from './col'

test('Enzyme snapshot', () => {
  const output = mount(
    <Col size={12} id="custom-id" className="custom-class-name">
      <p>child</p>
    </Col>
  )
  expect(toJson(output)).toMatchSnapshot()
})

test('Default col (equal)', () => {
  const output = renderer
    .create(
      <Col>
        <p>child</p>
      </Col>
    )
    .toJSON()

  expect(output).toMatchSnapshot()
  expect(output).toHaveStyleRule('max-width', '100%')
  expect(output).toHaveStyleRule('flex-basis', '0')
  expect(output).toHaveStyleRule('flex-grow', '1')
})

test('Default col (auto)', () => {
  const output = renderer
    .create(
      <Col size="auto">
        <p>child</p>
      </Col>
    )
    .toJSON()

  expect(output).toMatchSnapshot()
  expect(output).toHaveStyleRule('width', 'auto')
  expect(output).toHaveStyleRule('max-width', '100%')
  expect(output).toHaveStyleRule('flex', '0 0 auto')
})

test('Accepts string based column size values', () => {
  const output = renderer
    .create(
      <Col size="20%">
        <p>child</p>
      </Col>
    )
    .toJSON()

  expect(output).toMatchSnapshot()
  expect(output).toHaveStyleRule('flex', '0 0 20%')
  expect(output).toHaveStyleRule('max-width', '20%')
})

test('Breakpoint media', () => {
  const output = renderer
    .create(
      <Col size={12} sm={10} md={8} lg={6} xl={4}>
        <p>child</p>
      </Col>
    )
    .toJSON()

  expect(output).toMatchSnapshot()
  expect(output).toHaveStyleRule('flex', '0 0 100.000000%')
  expect(output).toHaveStyleRule('max-width', '100.000000%')

  // small
  expect(output).toHaveStyleRule('flex', '0 0 83.333333%', {
    media: '(min-width:576px)'
  })
  expect(output).toHaveStyleRule('max-width', '83.333333%', {
    media: '(min-width:576px)'
  })
  // medium
  expect(output).toHaveStyleRule('flex', '0 0 66.666667%', {
    media: '(min-width:768px)'
  })
  expect(output).toHaveStyleRule('max-width', '66.666667%', {
    media: '(min-width:768px)'
  })
  // large
  expect(output).toHaveStyleRule('flex', '0 0 50.000000%', {
    media: '(min-width:992px)'
  })
  expect(output).toHaveStyleRule('max-width', '50.000000%', {
    media: '(min-width:992px)'
  })
  // extra-large
  expect(output).toHaveStyleRule('flex', '0 0 33.333333%', {
    media: '(min-width:1200px)'
  })
  expect(output).toHaveStyleRule('max-width', '33.333333%', {
    media: '(min-width:1200px)'
  })
})

test('Breakpoint media sizing from nested element obj', () => {
  const output = renderer
    .create(
      <Col sm={{ size: 10 }} md={{ size: 8 }} lg={{ size: 6 }} xl={{ size: 4 }}>
        <p>child</p>
      </Col>
    )
    .toJSON()

  expect(output).toMatchSnapshot()

  // small
  expect(output).toHaveStyleRule('flex', '0 0 83.333333%', {
    media: '(min-width:576px)'
  })
  expect(output).toHaveStyleRule('max-width', '83.333333%', {
    media: '(min-width:576px)'
  })
  // medium
  expect(output).toHaveStyleRule('flex', '0 0 66.666667%', {
    media: '(min-width:768px)'
  })
  expect(output).toHaveStyleRule('max-width', '66.666667%', {
    media: '(min-width:768px)'
  })
  // large
  expect(output).toHaveStyleRule('flex', '0 0 50.000000%', {
    media: '(min-width:992px)'
  })
  expect(output).toHaveStyleRule('max-width', '50.000000%', {
    media: '(min-width:992px)'
  })
  // extra-large
  expect(output).toHaveStyleRule('flex', '0 0 33.333333%', {
    media: '(min-width:1200px)'
  })
  expect(output).toHaveStyleRule('max-width', '33.333333%', {
    media: '(min-width:1200px)'
  })
})

test('Applies padding and breakpoints from context', () => {
  const output = renderer
    .create(
      <GridTheme
        spacing={10}
        sm={1}
        smWidth={2}
        md={3}
        mdWidth={4}
        lg={5}
        lgWidth={6}
        xl={7}
        xlWidth={8}
      >
        <Col size={12} sm={10} md={8} lg={6} xl={4}>
          <p>child</p>
        </Col>
      </GridTheme>
    )
    .toJSON()

  expect(output).toMatchSnapshot()
  expect(output).toHaveStyleRule('padding-left', '10px')
  expect(output).toHaveStyleRule('padding-right', '10px')

  // small
  expect(output).toHaveStyleRule('flex', expect.any(String), {
    media: '(min-width:1px)'
  })
  // medium
  expect(output).toHaveStyleRule('flex', expect.any(String), {
    media: '(min-width:3px)'
  })
  // large
  expect(output).toHaveStyleRule('flex', expect.any(String), {
    media: '(min-width:5px)'
  })
  // extra-large
  expect(output).toHaveStyleRule('flex', expect.any(String), {
    media: '(min-width:7px)'
  })
})

test('Applies element style properties on root column', () => {
  const output = renderer
    .create(
      <Col
        p={16}
        justifyContent="between"
        alignSelf="center"
        alignContent="stretch"
      >
        <p>child</p>
      </Col>
    )
    .toJSON()

  expect(output).toMatchSnapshot()
  expect(output).toHaveStyleRule('padding', '16px')
  expect(output).toHaveStyleRule('justify-content', 'space-between')
  expect(output).toHaveStyleRule('align-self', 'center')
  expect(output).toHaveStyleRule('align-content', 'stretch')
})

test('Applies element style properties on breakpoints', () => {
  const output = renderer
    .create(
      <Col
        md={{
          p: 16,
          justifyContent: 'between',
          alignSelf: 'center',
          alignContent: 'stretch'
        }}
      >
        <p>child</p>
      </Col>
    )
    .toJSON()

  expect(output).toMatchSnapshot()

  expect(output).toHaveStyleRule('padding', '16px', {
    media: '(min-width:768px)'
  })
  expect(output).toHaveStyleRule('justify-content', 'space-between', {
    media: '(min-width:768px)'
  })
  expect(output).toHaveStyleRule('align-self', 'center', {
    media: '(min-width:768px)'
  })
  expect(output).toHaveStyleRule('align-content', 'stretch', {
    media: '(min-width:768px)'
  })
})
