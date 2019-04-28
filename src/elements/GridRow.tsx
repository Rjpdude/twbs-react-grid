import React from 'react'
import { Elements, PropType } from '../'
import * as Util from '../util/Util'

interface Props extends Elements.FixedElement {
  noGutters: boolean
}

export default (props: PropType<Props>) => {
  const row = Util.translateElement(props as Elements.GridElement)
  row.push('row')
  if (props.noGutters) {
    row.push('no-gutters')
  }
  if (props.className) {
    row.push(props.className)
  }
  return <div className={Util.joinElementProperties(row)}>{props.children}</div>
}
