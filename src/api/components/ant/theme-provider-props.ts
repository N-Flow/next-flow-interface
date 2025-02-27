import {ThemeColor} from "@/api/service/main/theme/dto/theme-color.enum";

export default interface ThemeProviderProps {
  children?: React.ReactNode
  theme?: ThemeColor
}
