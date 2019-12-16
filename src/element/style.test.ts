import * as Style from './style'

const mappedStyle = {
  display: Style.display('inline-block', 'display'),
  direction: Style.direction('column-reverse'),
  justifyContent: Style.justifyContent('between'),
  alignContent: Style.alignContent('center'),
  alignItems: Style.alignItems('baseline'),
  alignSelf: Style.alignSelf('start'),
  order: Style.order('first'),
  offset: Style.order('last'),
  wrap: Style.wrap('reverse'),
  grow: Style.grow(0),
  shrink: Style.shrink(1),
  fill: Style.fill(true)
}

test('Style mapping', () => {
  expect(mappedStyle).toMatchSnapshot()
})

test('Style values are all objects', () => {
  Object.values(mappedStyle).forEach((styleVal) => {
    expect(styleVal).toEqual(expect.any(Object))
  })
})
