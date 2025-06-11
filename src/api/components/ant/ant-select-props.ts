import { SelectProps } from 'antd'

export interface AntSelectProps extends SelectProps {
  value?: string | number | string[] | number[]
  onChange?: (
    value: string | number | string[] | number[],
    option: Record<string, unknown> | Record<string, unknown>[],
  ) => void
  showSearch?: boolean
  onClick?: (value: string | number | string[] | number[]) => void
  className?: string
  classNameInner?: string
  placeholder?: string
  optionFilterProp?: string
  filterOption?: (input: string, option: Record<string, unknown>) => boolean
  filterSort?: (optionA: Record<string, unknown>, optionB: Record<string, unknown>) => number
  size?: 'small' | 'middle' | 'large' | undefined
  options?: { label: string; value: string | number; [key: string]: unknown }[]
}
