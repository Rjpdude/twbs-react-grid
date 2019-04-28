import React from 'react'
import { Elements, PropType } from '../'
import * as Util from '../util/Util'

interface Props extends Elements.FixedElement {
  noGutters: boolean
}

export default (props: PropType<Props>) => {
  const row = Util.translateElement(props as Elements.GridElement)
  row.classNames.push('row')
  if (props.noGutters) {
    row.classNames.push('no-gutters')
  }
  if (props.className) {
    row.classNames.push(props.className)
  }
  return <div {...row.DOMProps} className={Util.joinElementProperties(row.classNames)}>{props.children}</div>
}
