import {DivProps} from "@/api/components/interface/base-types";

export interface RsdMentionsProps extends DivProps {
  value: string
  onChange: (value: any) => void
  type?: 'text' | 'number' | 'password'
  placeholder?: string
  className?: string
  theme?: string
  rows?: number
}
