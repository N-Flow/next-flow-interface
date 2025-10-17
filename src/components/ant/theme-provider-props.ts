import { ThemeBackground } from '@/service/main/theme/dto/theme-background.enum'
import { ThemeColor } from '@/service/main/theme/dto/theme-color.enum'

export default interface ThemeProviderProps {
  children?: React.ReactNode
  color?: ThemeColor
  background?: ThemeBackground
}
