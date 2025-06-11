import { DivProps } from '@/api/components/interface/base-types'

export interface RsdNumberProps extends DivProps {
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
