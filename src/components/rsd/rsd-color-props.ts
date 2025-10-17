import { DivPropsSimple } from '@/components/interface/base-types'

export interface RsdColorProps extends DivPropsSimple {
  value: string
  onChange: (value: string) => void
  label: string
  disableAlpha?: boolean
  className?: string
  theme?: string
}
