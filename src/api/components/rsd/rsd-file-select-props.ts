import { DivProps } from '@/api/components/interface/base-types'
import { ThemeColor } from '@/api/service/main/theme/dto/theme-color.enum'

export interface RsdFileSelectProps extends DivProps {
  label: string
  value: string
  onChange: (value: string) => void // TODO: 改名为 onFileChange 关联插件等地同步修改 @YF
  accept: string[]
  tip?: string
  className?: string
  theme?: ThemeColor
}
