import { DivProps } from '@/components/interface/base-types'

export interface BatchApplyProps extends DivProps {
  dialogId: string
  onConfirm?: () => void
  onCancel?: () => void
}