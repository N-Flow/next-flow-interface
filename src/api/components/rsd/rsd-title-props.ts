import { DivProps } from '../interface/base-types'

export interface RsdTitleProps extends DivProps {
  title: string
  className?: string
  tip?: string
  detail?: string
  mt?: boolean
}
