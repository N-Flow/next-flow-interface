import ThemeState from "@/api/service/main/theme/dto/theme-state.interface";

export default interface ThemeServiceApi {

  state: ThemeState

  isDarkTheme(): boolean

}
