import {DivProps} from "../interface/base-types";

export default interface RsdInputProps extends DivProps {
  value: string
  onChange: (value: any) => void
  type?: 'text' | 'number' | 'password'
  placeholder?: string
  className?: string
  theme?: string
  rows?: number
  maxLength?: number
}
