import { SelectProps } from 'antd'
import { DefaultOptionType } from 'antd/es/select'
import { MouseEventHandler } from 'react'

export interface AntSelectProps<ValueType> extends SelectProps<ValueType> {
  value?: ValueType
  onChange?: (value: ValueType, option?: DefaultOptionType | DefaultOptionType[]) => void
  showSearch?: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
  className?: string
  classNameInner?: string
  placeholder?: string
  optionFilterProp?: string
  size?: 'small' | 'middle' | 'large' | undefined
  options?: DefaultOptionType[]
}
