import { MouseEventHandler } from 'react'

import { DivProps } from '../interface/base-types'

export interface RsdButtonProps extends DivProps {
  onClick: MouseEventHandler<HTMLDivElement>
  dashed?: boolean
  text: string
  tip?: string
  icon?: string
  iconSize?: number
  single?: boolean
}
