import { DivPropsSimple } from '@/components/interface/base-types'

export interface RsdSwitchProps extends DivPropsSimple {
  value: boolean
  onChange: (value: boolean) => void
  label: string
  className?: string
  theme?: string
}
