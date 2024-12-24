import {DivProps} from "@/api/components/interface/base-types";

export interface RsdColorProps extends DivProps {
  value: string | null
  onChange: (value: any) => void
  label: string
  disableAlpha?: boolean
  className?: string
  theme?: string
}