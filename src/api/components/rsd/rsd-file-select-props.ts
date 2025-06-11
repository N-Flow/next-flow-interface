import { DivPropsWithoutOnChange } from '@/api/components/interface/base-types'
import { ThemeColor } from '@/api/service/main/theme/dto/theme-color.enum'

export interface RsdFileSelectProps extends DivPropsWithoutOnChange {
  label: string
  value: string
  onChange: (value: string) => void
  accept: string[]
  tip?: string
  className?: string
  theme?: ThemeColor
}
