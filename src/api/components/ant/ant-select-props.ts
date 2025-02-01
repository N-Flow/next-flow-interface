import {SelectProps} from "antd";

export interface AntSelectProps extends SelectProps{
  value?: any
  onChange?: (value: any) => void
  showSearch?: boolean
  onClick?: (value: any) => void
  className?: string
  classNameInner?: string
  placeholder?: string
  optionFilterProp?: string
  filterOption?: (input: any, option: any) => boolean
  filterSort?: (optionA: any, optionB: any) => any
  size?: 'small' | 'middle' | 'large' | undefined
  options?: any
}