import { SelectProps } from 'antd'
import { BaseOptionType, DefaultOptionType } from 'antd/es/select'
import { MouseEventHandler } from 'react'

export interface AntSelectProps<
  ValueType,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends SelectProps<ValueType, OptionType> {
  value?: ValueType
  onChange?: (value: ValueType, option?: OptionType | OptionType[]) => void
  showSearch?: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
  className?: string
  classNameInner?: string
  placeholder?: string
  optionFilterProp?: string
  size?: 'small' | 'middle' | 'large' | undefined
  options?: OptionType[]
}
