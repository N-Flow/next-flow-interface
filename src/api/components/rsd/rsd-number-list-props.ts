import {DivProps} from "@/api/components/interface/base-types";

export interface RsdNumberListProps extends DivProps {
  style?: React.CSSProperties
  value: number[]
  keys: string[]
  onChangeIndex: (index: number, value: number | null) => void
  min?: number
  className?: string
  theme?: string
  shrink?: boolean
}
