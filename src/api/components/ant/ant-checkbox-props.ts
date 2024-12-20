import {SwitchProps} from "antd";

export interface AntCheckboxProps extends SwitchProps {
  value: boolean
  onChange: (value: any) => void
  className?: string | undefined
  label?: string
}
