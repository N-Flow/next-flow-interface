import { DivPropsSimple } from '@/api/components/interface/base-types'

export interface RsdSelectProps<ValueType = string> extends DivPropsSimple {
  value: ValueType
  defaultValue?: ValueType
  options: { value: ValueType; label: string }[]
  onChange: (value: ValueType) => void
  label: string
  className?: string
  theme?: string
  smallWidth?: boolean
}
