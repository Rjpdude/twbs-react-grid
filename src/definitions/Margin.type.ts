type MarginValue = 'auto' | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5

interface MarginProperties {
  m: MarginValue
  mT: MarginValue
  mB: MarginValue
  mY: MarginValue
  mL: MarginValue
  mR: MarginValue
  mX: MarginValue
}

export { MarginProperties, MarginValue }
