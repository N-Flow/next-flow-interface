import {InputNumberProps} from "antd"

export interface AntNumberProps extends InputNumberProps {
  value: number | null
  onChange: (value: any) => void
  placeholder?: string
  className?: string
  classNameInner?: string
  theme?: string
}
