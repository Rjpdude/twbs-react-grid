import React from 'react'
import { Elements, PropType } from '../'
import * as Util from '../util/Util'

interface Props extends Elements.FixedElement {
  noGutters: boolean
}

export default (props: PropType<Props>) => {
  const row = Util.translateElement(props as Elements.GridElement)
  if (props.noGutters) {
    row.push('no-gutters')
  }
  row.push('row')
  return <div className={Util.joinElementProperties(row)}>{props.children}</div>
}
