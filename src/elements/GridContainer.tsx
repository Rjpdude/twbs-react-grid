import React from 'react'
import { Elements, PropType } from '../'
import * as Util from '../util/Util'

interface Props extends Elements.FixedElement {
  fluid: boolean
}

export default (props: PropType<Props>) => {
  const container = Util.translateElement(props as Elements.GridElement)
  container.classNames.push(props.fluid ? 'container-fluid' : 'container')
  return <div {...container.DOMProps} className={Util.joinElementProperties(container.classNames)}>{props.children}</div>
}
