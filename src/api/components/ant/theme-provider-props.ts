import {ThemeColor} from "@/api/service/main/space/dto/theme/theme-color";

export default interface ThemeProviderProps {
  children?: React.ReactNode
  theme?: ThemeColor
}
