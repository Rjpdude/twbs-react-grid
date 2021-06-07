import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { mount } from 'enzyme'
import { GridTheme } from '../theme/theme'
import { Row } from './row'
import { Col } from './col'

test('Default row', () => {
  const output = renderer
    .create(
      <Row>
        <p>child</p>
      </Row>
    )
    .toJSON()
  expect(output).toMatchSnapshot()
})

test('No gutters', () => {
  const output = renderer
    .create(
      <Row gutters={false}>
        <Col>
          <p>child</p>
        </Col>
      </Row>
    )
    .toJSON()

  expect(output).toMatchSnapshot()
  expect(output).toHaveStyleRule('margin-left', '0')
  expect(output).toHaveStyleRule('margin-right', '0')

  expect(output).toHaveStyleRule('padding-left', '0', {
    modifier: `> ${Col.styledComponent}`
  })
  expect(output).toHaveStyleRule('padding-right', '0', {
    modifier: `> ${Col.styledComponent}`
  })
})

test('Applies column sizes to children', () => {
  const output = mount(
    <Row cols={1} cols_sm={2} cols_md={3} cols_lg={4} cols_xl={5}>
      <Col />
      <Col />
    </Row>
  )
  const children = output.find(Col)

  expect(children.length).toBe(2)

  children.forEach((col) => {
    expect(col.prop('size')).toBe(12)
    expect(col.prop('sm')).toBe(6)
    expect(col.prop('md')).toBe(4)
    expect(col.prop('lg')).toBe(3)
    expect(col.prop('xl')).toBe('20%')
  })
})

test('Applies column sizes to children w/ obj. breakpoint properties', () => {
  const output = mount(
    <Row cols_md={3}>
      <Col md={{ justifyContent: 'center' }} />
      <Col md={{ justifyContent: 'end', size: 9 }} />
    </Row>
  )
  const children = output.find(Col)

  expect(children.at(0).prop('md')).toEqual({
    justifyContent: 'center',
    size: 4
  })

  expect(children.at(1).prop('md')).toEqual({
    justifyContent: 'end',
    size: 9
  })
})

test('Applies column properties', () => {
  const output = mount(
    <Row col_props={{ display: 'flex' }} col_props_xl={{ m: 22 }}>
      <Col />
      <Col display="inline-block" />
    </Row>
  )
  const children = output.find(Col)

  expect(children.at(0).props()).toEqual({
    display: 'flex',
    xl: {
      m: 22
    }
  })

  expect(children.at(1).props()).toEqual({
    display: 'inline-block',
    xl: {
      m: 22
    }
  })
})

test('Applies element style properties', () => {
  const output = renderer
    .create(
      <Row
        p={16}
        justifyContent="between"
        alignSelf="center"
        alignContent="stretch"
      >
        <p>child</p>
      </Row>
    )
    .toJSON()

  expect(output).toMatchSnapshot()
  expect(output).toHaveStyleRule('padding', '16px')
  expect(output).toHaveStyleRule('justify-content', 'space-between')
  expect(output).toHaveStyleRule('align-self', 'center')
  expect(output).toHaveStyleRule('align-content', 'stretch')
})

test('Applies theme context spacing', () => {
  const output = renderer
    .create(
      <GridTheme spacing={8}>
        <Row />
      </GridTheme>
    )
    .toJSON()
  expect(output).toHaveStyleRule('margin-left', '-8px')
  expect(output).toHaveStyleRule('margin-right', '-8px')
})
