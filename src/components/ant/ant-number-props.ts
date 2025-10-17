import { InputNumberProps } from 'antd'

export interface AntNumberProps extends Omit<InputNumberProps, 'onChange'> {
  value: number | null
  onChange: (value: number | null) => void
  placeholder?: string
  className?: string
  classNameInner?: string
  theme?: string
}
