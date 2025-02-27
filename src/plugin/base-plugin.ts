import {PluginType} from "./dto/plugin-type.enum";
import {ThemeColor} from "@/api/service/main/theme/dto/theme-color.enum";

export default interface BasePlugin {
  id: string
  name: string
  version: string
  description: string
  
  type: PluginType
  theme: ThemeColor

  data: any

  onInstall: () => Promise<void>
  onEnable: () => Promise<void>
  onDisable: () => Promise<void>
  onUninstall: () => Promise<void>
}

