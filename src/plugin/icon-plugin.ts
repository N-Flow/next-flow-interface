import BasePlugin from "./base-plugin";
import {IconPluginPosition} from "./enum/icon-plugin-position";
import {FunctionComponent} from "react";
import {ThemeColor} from "../api/service/main/space/interface/theme/theme-color";

export default interface IconPlugin extends BasePlugin {
  position: IconPluginPosition
  group: string
  label: string
  color: ThemeColor
  
  icon: FunctionComponent
  onIconClickRouter: (e: MouseEvent) => string
  onIconContextMenu: (e: MouseEvent) => void
}
