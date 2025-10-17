import { DivProps } from '@/components/interface/base-types'

export interface FileProgressBarProps extends DivProps {
  size: string
  value: number
  className?: string
  theme?: string
}
