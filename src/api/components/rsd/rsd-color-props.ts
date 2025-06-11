import { DivPropsWithoutOnChange } from '@/api/components/interface/base-types'

export interface RsdColorProps extends DivPropsWithoutOnChange {
  value: string | null
  onChange: (value: string | null) => void
  label: string
  disableAlpha?: boolean
  className?: string
  theme?: string
}
