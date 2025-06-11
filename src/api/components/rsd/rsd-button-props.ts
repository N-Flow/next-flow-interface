import { DivProps } from '../interface/base-types'

export interface RsdButtonProps extends DivProps {
  onClick: (e: MouseEvent) => void
  dashed?: boolean
  text: string
  tip?: string
  icon?: string
  iconSize?: number
  single?: boolean
}
