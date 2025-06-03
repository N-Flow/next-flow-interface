import {ColorPickerProps, Color} from "antd/es/color-picker"

export interface AntColorProps extends ColorPickerProps {
  value: Color | string | null
  onColorChange: (value: string) => void
  className?: string
  classNameInner?: string
  theme?: string
}
