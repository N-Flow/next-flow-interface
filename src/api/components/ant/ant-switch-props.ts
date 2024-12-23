import {SwitchProps} from "antd";

export interface AntSwitchProps extends SwitchProps {
  value: boolean
  onChange: (value: any) => void
  className?: string | undefined
}
