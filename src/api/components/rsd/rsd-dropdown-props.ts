import {DivProps} from "@/api/components/interface/base-types";

export interface RsdDropdownProps extends DivProps {
  value: any
  defaultValue?: any
  options: { value: any, label: string }[]
  onChange: (value: any) => void
  label: string
  className?: string
  theme?: string
  smallWidth?: boolean
}
