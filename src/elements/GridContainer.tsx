import React from 'react'
import { Elements, PropType } from '../'
import * as Util from '../util/Util'

interface Props extends Elements.FixedElement {
  fluid: boolean
}

export default (props: PropType<Props>) => {
  const container = Util.translateElement(props as Elements.GridElement)
  container.push(props.fluid ? 'container-fluid' : 'container')
  return <div className={Util.joinElementProperties(container)}>{props.children}</div>
}
