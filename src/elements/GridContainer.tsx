import React from 'react'
import { Elements, PropType } from '../Types'
import { translateElement } from '../util/Util'

interface Props extends Elements.FixedElement {
  fluid: boolean
}

export default (props: PropType<Props>) => {
  const column = translateElement(props as Elements.GridElement)
  column.push(props.fluid ? 'container-fluid' : 'container')
  return <div className={column.join(' ')}>{props.children}</div>
}
