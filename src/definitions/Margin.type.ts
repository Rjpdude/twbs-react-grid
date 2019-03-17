type MarginValue = 'auto' | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5

interface MarginProperties {
  margin: MarginValue
  marginTop: MarginValue
  marginBottom: MarginValue
  marginLeft: MarginValue
  marginRight: MarginValue
}

export { MarginProperties, MarginValue }
