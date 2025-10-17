import { DivPropsSimple } from '@/components/interface/base-types'

export interface RsdNumberProps extends DivPropsSimple {
  value: number | null
  onChange: (value: number | null) => void
  label: string
  placeholder?: string
  className?: string
  theme?: string
  unit?: string
  min?: number
  max?: number
  step?: number
}
