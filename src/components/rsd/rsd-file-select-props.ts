import { DivPropsSimple } from '@/components/interface/base-types'
import { ThemeColor } from '@/service/main/theme/dto/theme-color.enum'

export interface RsdFileSelectProps extends DivPropsSimple {
  label: string
  value: string
  onChange: (value: string) => void
  accept: string[]
  tip?: string
  className?: string
  theme?: ThemeColor
}
