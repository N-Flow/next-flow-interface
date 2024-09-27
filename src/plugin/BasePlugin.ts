import {PluginType} from "./PluginType";
import {ThemeColor} from "../theme/ThemeColor";

export default interface BasePlugin {
  name: string
  version: string
  description: string
  
  type: PluginType
  theme: ThemeColor
}
