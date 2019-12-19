import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
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
        <p>child</p>
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
