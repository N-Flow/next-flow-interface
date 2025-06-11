import { DivPropsWithoutOnChange } from '../interface/base-types'

export interface RsdInputProps extends DivPropsWithoutOnChange {
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'number' | 'password'
  placeholder?: string
  className?: string
  theme?: string
  rows?: number
  maxLength?: number
}
