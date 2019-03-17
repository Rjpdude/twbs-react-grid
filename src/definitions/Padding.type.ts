type PaddingValue = 0 | 1 | 2 | 3 | 4 | 5

interface PaddingProperties {
  padding: PaddingValue
  paddingTop: PaddingValue
  paddingBottom: PaddingValue
  paddingLeft: PaddingValue
  paddingRight: PaddingValue
}

export { PaddingValue, PaddingProperties }
