import {DivProps} from "@/api/components/interface/base-types";

export interface RsdSelectableButtonProps extends DivProps {
  value: boolean
  onChange: (value: any) => void
  label: string
  className?: string
  theme?: string
}
