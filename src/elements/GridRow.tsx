import React from 'react'
import { Elements, PropType } from '../'
import { translateElement } from '../util/Util'

interface Props extends Elements.FixedElement {
  noGutters: boolean
}

export default (props: PropType<Props>) => {
  const row = translateElement(props as Elements.GridElement)
  if (props.noGutters) {
    row.push('no-gutters')
  }
  row.push('row')
  return <div className={row.join(' ')}>{props.children}</div>
}
