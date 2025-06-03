import { ThemeBackground } from "@/api/service/main/theme/dto/theme-background.enum"
import {ThemeColor} from "@/api/service/main/theme/dto/theme-color.enum"

export default interface ThemeProviderProps {
  children?: React.ReactNode
  color?: ThemeColor
  background?: ThemeBackground
}
