import { SwitchProps } from 'antd'

export interface AntSwitchProps extends SwitchProps {
  value: boolean
  onChange: (value: boolean) => void
  className?: string | undefined
}
