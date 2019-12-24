import * as Util from './util'

describe('getElementPropertyStyle', () => {
  test('Supplies style mapping function res', () => {
    const styleMap = {
      display: (val) => ({ display: val })
    }

    expect(
      Util.getElementPropertyStyle(styleMap, 'display', 'demo-val')
    ).toEqual({
      display: 'demo-val'
    })
  })

  test('Supplies empty obj. on invalid keys', () => {
    const styleMap = {
      invalidStyle: null
    }

    expect(Util.getElementPropertyStyle(styleMap, 'key', '')).toEqual({})
    expect(Util.getElementPropertyStyle(styleMap, 'invalidStyle', '')).toEqual(
      {}
    )
  })

  test('Calls spacing style function directly on spacing keys', () => {
    const spacingPropFunc = jest
      .spyOn(Util, 'isElementSpacingProp')
      .mockReturnValueOnce(true)

    const spacingStyleFunc = jest
      .spyOn(Util, 'mapSpacingStyle')
      .mockReturnValueOnce({
        someKey: 'someVal'
      })

    expect(Util.getElementPropertyStyle({}, 'spacing-key', '')).toEqual({
      someKey: 'someVal'
    })

    expect(spacingPropFunc).toHaveBeenCalledWith('spacing-key')
    expect(spacingStyleFunc).toHaveBeenCalledWith('', 'spacing-key')
  })
})

describe('mapPropertyStyle', () => {
  test('Returns function', () => {
    expect(Util.mapPropertyStyle('', [])).toEqual(expect.any(Function))
  })

  test('Calls the verify style value on incoming input', () => {
    const spy = jest.spyOn(Util, 'verifyStyleValue').mockReturnValueOnce(false)
    const mapFunc = Util.mapPropertyStyle('', [])
    const res = mapFunc('val', 'key' as any)

    expect(res).toBe(undefined)
    expect(spy).toHaveBeenCalledWith('val', 'key', [])
  })

  test('Calls the supplied style mapper and returns result', () => {
    jest.spyOn(Util, 'verifyStyleValue').mockReturnValueOnce(true)

    const styleMap = jest.fn().mockReturnValue({})
    const mapFunc = Util.mapPropertyStyle(styleMap)
    const res = mapFunc('val', 'key' as any)

    expect(res).toEqual({})
    expect(styleMap).toHaveBeenCalledWith('val', 'key')
  })

  test('Supplies style obj. when style mapper is a string', () => {
    jest.spyOn(Util, 'verifyStyleValue').mockReturnValueOnce(true)

    const mapFunc = Util.mapPropertyStyle('style-key')

    expect(mapFunc('style-val')).toEqual({
      'style-key': 'style-val'
    })
  })

  test('Defaults to incoming style key when style mapper is undefined', () => {
    jest.spyOn(Util, 'verifyStyleValue').mockReturnValueOnce(true)

    const mapFunc = Util.mapPropertyStyle()

    expect(mapFunc('style-val', 'incoming-style-key' as any)).toEqual({
      'incoming-style-key': 'style-val'
    })
  })
})

describe('mapSpacingStyle', () => {
  test('Base spacing style keys', () => {
    expect(Util.mapSpacingStyle(10, 'm')).toEqual({
      margin: expect.any(String)
    })

    expect(Util.mapSpacingStyle(10, 'p')).toEqual({
      padding: expect.any(String)
    })
  })

  test('Bilateral spacing keys', () => {
    expect(Util.mapSpacingStyle(10, 'mX')).toEqual({
      marginTop: expect.any(String),
      marginBottom: expect.any(String)
    })

    expect(Util.mapSpacingStyle(10, 'mY')).toEqual({
      marginRight: expect.any(String),
      marginLeft: expect.any(String)
    })

    expect(Util.mapSpacingStyle(10, 'pX')).toEqual({
      paddingTop: expect.any(String),
      paddingBottom: expect.any(String)
    })

    expect(Util.mapSpacingStyle(10, 'pY')).toEqual({
      paddingRight: expect.any(String),
      paddingLeft: expect.any(String)
    })
  })

  test('Unilateral spacing keys', () => {
    expect(Util.mapSpacingStyle(10, 'mT')).toEqual({
      marginTop: expect.any(String)
    })
    expect(Util.mapSpacingStyle(10, 'mB')).toEqual({
      marginBottom: expect.any(String)
    })
    expect(Util.mapSpacingStyle(10, 'mR')).toEqual({
      marginRight: expect.any(String)
    })
    expect(Util.mapSpacingStyle(10, 'mL')).toEqual({
      marginLeft: expect.any(String)
    })

    expect(Util.mapSpacingStyle(10, 'pT')).toEqual({
      paddingTop: expect.any(String)
    })
    expect(Util.mapSpacingStyle(10, 'pB')).toEqual({
      paddingBottom: expect.any(String)
    })
    expect(Util.mapSpacingStyle(10, 'pR')).toEqual({
      paddingRight: expect.any(String)
    })
    expect(Util.mapSpacingStyle(10, 'pL')).toEqual({
      paddingLeft: expect.any(String)
    })
  })

  test('Supplies string value override', () => {
    expect(Util.mapSpacingStyle('5em', 'm')).toEqual({
      margin: '5em'
    })
  })

  test('Supplies pixel values by default', () => {
    expect(Util.mapSpacingStyle(5, 'm')).toEqual({
      margin: '5px'
    })
  })
})

describe('isElementSpacingProp', () => {
  test('Returns false if key is greater than 2 characters', () => {
    expect(Util.isElementSpacingProp('***')).toBe(false)
  })

  test('Returns false if key doesnt start with m or p', () => {
    expect(Util.isElementSpacingProp('y')).toBe(false)
    expect(Util.isElementSpacingProp('s')).toBe(false)
  })

  test('Valid spacing keys', () => {
    expect(Util.isElementSpacingProp('m')).toBe(true)
    expect(Util.isElementSpacingProp('mX')).toBe(true)
    expect(Util.isElementSpacingProp('mY')).toBe(true)
    expect(Util.isElementSpacingProp('mT')).toBe(true)
    expect(Util.isElementSpacingProp('mB')).toBe(true)
    expect(Util.isElementSpacingProp('mL')).toBe(true)
    expect(Util.isElementSpacingProp('mR')).toBe(true)

    expect(Util.isElementSpacingProp('p')).toBe(true)
    expect(Util.isElementSpacingProp('pX')).toBe(true)
    expect(Util.isElementSpacingProp('pY')).toBe(true)
    expect(Util.isElementSpacingProp('pT')).toBe(true)
    expect(Util.isElementSpacingProp('pB')).toBe(true)
    expect(Util.isElementSpacingProp('pL')).toBe(true)
    expect(Util.isElementSpacingProp('pR')).toBe(true)
  })
})
