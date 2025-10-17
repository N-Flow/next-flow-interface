import { DivPropsSimple } from '@/components/interface/base-types'

export interface RsdCheckboxProps extends DivPropsSimple {
  value: boolean
  onChange: (value: boolean) => void
  label: string
  className?: string
  theme?: string
}
