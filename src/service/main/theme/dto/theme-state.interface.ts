import { ThemeBackground } from '@/service/main/theme/dto/theme-background.enum'
import { ThemeColor } from '@/service/main/theme/dto/theme-color.enum'
import { ThemeShape } from '@/service/main/theme/dto/theme-shape.enum'

export default interface ThemeState {
  background: ThemeBackground
  color: ThemeColor
  shape: ThemeShape
}
