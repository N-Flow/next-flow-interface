import {PluginType} from "./enum/plugin-type";
import {ThemeColor} from "../api/service/main/space/interface/theme/theme-color";
import {OfpApi} from "../api/ofp-api";

export default interface BasePlugin {
  id: string
  name: string
  version: string
  description: string
  
  type: PluginType
  theme: ThemeColor
  
  onLoad: () => Promise<void>
  onActivate: () => Promise<void>
  onDeactivate: () => Promise<void>
  onDispose: () => Promise<void>
}

