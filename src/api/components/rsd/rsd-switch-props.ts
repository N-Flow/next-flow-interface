import { DivProps } from '@/api/components/interface/base-types'

export interface RsdSwitchProps extends DivProps {
  value: boolean
  onChange: (value: boolean) => void
  label: string
  className?: string
  theme?: string
}
