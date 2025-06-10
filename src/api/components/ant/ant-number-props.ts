import { InputNumberProps } from 'antd'

export interface AntNumberProps extends InputNumberProps {
  value: number | null
  onChange: (value: string | number | null) => void
  placeholder?: string
  className?: string
  classNameInner?: string
  theme?: string
}
