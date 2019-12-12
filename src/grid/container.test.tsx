import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { GridTheme } from '../theme/theme'
import { Container } from './container'

test('Default container', () => {
  const output = renderer
    .create(
      <Container>
        <p>child</p>
      </Container>
    )
    .toJSON()
  expect(output).toMatchSnapshot()
})

test('Fluid container', () => {
  const output = renderer
    .create(
      <Container fluid={true}>
        <p>child</p>
      </Container>
    )
    .toJSON()
  expect(output).toMatchSnapshot()
})

test('Breakpoints', () => {
  const output = renderer.create(<Container />).toJSON()

  // small
  expect(output).toHaveStyleRule('max-width', '540px', {
    media: '(min-width:576px)'
  })
  // medium
  expect(output).toHaveStyleRule('max-width', '720px', {
    media: '(min-width:768px)'
  })
  // large
  expect(output).toHaveStyleRule('max-width', '960px', {
    media: '(min-width:992px)'
  })
  // extra-large
  expect(output).toHaveStyleRule('max-width', '1140px', {
    media: '(min-width:1200px)'
  })
})

test('Breakpoints (fluid)', () => {
  const outputFluid = renderer.create(<Container fluid={true} />).toJSON()

  // small
  expect(outputFluid).not.toHaveStyleRule('max-width', '540px', {
    media: '(min-width:576px)'
  })
  // medium
  expect(outputFluid).not.toHaveStyleRule('max-width', '720px', {
    media: '(min-width:768px)'
  })
  // large
  expect(outputFluid).not.toHaveStyleRule('max-width', '960px', {
    media: '(min-width:992px)'
  })
  // extra-large
  expect(outputFluid).not.toHaveStyleRule('max-width', '1140px', {
    media: '(min-width:1200px)'
  })
})

test('Applies padding and breakpoints from context', () => {
  const output = renderer
    .create(
      <GridTheme
        spacing={6}
        sm={1}
        smWidth={2}
        md={3}
        mdWidth={4}
        lg={5}
        lgWidth={6}
        xl={7}
        xlWidth={8}
      >
        <Container />
      </GridTheme>
    )
    .toJSON()

  expect(output).toHaveStyleRule('padding-left', '6px')
  expect(output).toHaveStyleRule('padding-right', '6px')

  // small
  expect(output).toHaveStyleRule('max-width', '2px', {
    media: '(min-width:1px)'
  })
  // medium
  expect(output).toHaveStyleRule('max-width', '4px', {
    media: '(min-width:3px)'
  })
  // large
  expect(output).toHaveStyleRule('max-width', '6px', {
    media: '(min-width:5px)'
  })
  // extra-large
  expect(output).toHaveStyleRule('max-width', '8px', {
    media: '(min-width:7px)'
  })
})

test('Applies element style properties', () => {
  const output = renderer
    .create(
      <Container
        p={16}
        justifyContent="between"
        alignSelf="center"
        alignContent="stretch"
      >
        <p>child</p>
      </Container>
    )
    .toJSON()

  expect(output).toMatchSnapshot()
  expect(output).toHaveStyleRule('padding', '16px')
  expect(output).toHaveStyleRule('justify-content', 'space-between')
  expect(output).toHaveStyleRule('align-self', 'center')
  expect(output).toHaveStyleRule('align-content', 'stretch')
})
