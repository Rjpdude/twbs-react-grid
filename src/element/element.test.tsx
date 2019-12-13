import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { mount } from 'enzyme'
import { configureElement } from './element'

test('Configure element function', () => {
  expect(configureElement).toEqual(expect.any(Function))
})

test('Supplies component w/ attached styled component ref', () => {
  const Element = configureElement(() => ({}), [])

  expect(Element).toEqual(expect.any(Function))
  expect(Element.styledComponent).toEqual(expect.any(Object))
})

test('Renders children', () => {
  const Element = configureElement(() => ({}), [])

  const output = mount(
    <Element>
      <p>child</p>
    </Element>
  )

  expect(output.find('p').text()).toBe('child')
})

test('Attaches style and pass through dom attrs', () => {
  const Element = configureElement<{ val: number }>(
    (props) => ({
      margin: `${props.ownProps.val}px`
    }),
    ['val']
  )

  const output = renderer
    .create(<Element val={10} className="custom-class-name" />)
    .toJSON()

  expect(output.props.className.includes('custom-class-name')).toBe(true)
  expect(output).toHaveStyleRule('margin', '10px')
})

test('Attaches element style properties', () => {
  const Element = configureElement(() => ({}), [])

  const output = renderer
    .create(
      <Element
        display="none"
        direction="column"
        alignContent="between"
        m={16}
      />
    )
    .toJSON()

  expect(output).toHaveStyleRule('display', 'none')
  expect(output).toHaveStyleRule('flex-direction', 'column')
  expect(output).toHaveStyleRule('align-content', 'space-between')
  expect(output).toHaveStyleRule('margin', '16px')
})
