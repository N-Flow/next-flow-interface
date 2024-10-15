import {PluginType} from "./PluginType";
import {ThemeColor} from "../interface/core/theme/ThemeColor";
import {OfpApi} from "../api/OfpApi";

export default interface BasePlugin {
  name: string
  version: string
  description: string
  
  type: PluginType
  theme: ThemeColor
  
  onLoad: (api: OfpApi) => void
  onActivate: () => void
  onDeactivate: () => void
  onDispose: () => void
}
