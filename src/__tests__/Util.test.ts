import { joinElementProperties } from '../util/Util'

describe('Util', () => {
  it('joinElementProperties joins an elements properties', () => {
    const elementProps = [' first', 'second', 'third ']
    expect(joinElementProperties(elementProps)).toBe('first second third')
    expect(joinElementProperties(elementProps)).not.toBe(' first second third ')
  })
})
