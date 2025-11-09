import { DivPropsSimple } from '@/components/interface/base-types'

export interface RsdTargetInfoProps extends DivPropsSimple {
  nid: string
  getSummaryText?(): string
  getTipText?(): string
  showTipText?: boolean
  showGetChildrenTip?: boolean
}