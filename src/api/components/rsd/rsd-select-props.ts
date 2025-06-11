import { DivProps } from '@/api/components/interface/base-types'

export interface RsdSelectProps extends DivProps {
  value: string | number
  defaultValue?: string | number
  options: { value: string | number; label: string }[]
  onChange: (value: string | number) => void
  label: string
  className?: string
  theme?: string
  smallWidth?: boolean
}
