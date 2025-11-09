import { DivProps } from '@/components/interface/base-types'

export interface BatchApplyProps extends DivProps {
  tip?: string
  onConfirm?: () => void
  onCancel?: () => void
}
