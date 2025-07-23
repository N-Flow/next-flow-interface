import { DivPropsSimple } from '@/api/components/interface/base-types'

export interface RsdColorProps extends DivPropsSimple {
  value: string | null
  onChange: (value: string | null) => void
  label: string
  disableAlpha?: boolean
  className?: string
  theme?: string
}
