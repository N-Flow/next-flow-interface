import {DivProps} from "@/api/components/interface/base-types";

// @ts-ignore
export interface RsdFileSelectProps extends DivProps {
  label: string
  value: string
  onChange: (value: string) => void
  accept: string[]
  tip?: string
  className?: string
  theme?: string
}
