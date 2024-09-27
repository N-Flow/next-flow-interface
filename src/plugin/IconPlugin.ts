import BasePlugin from "./BasePlugin";
import {IconPluginPosition} from "./IconPluginPosition";
import {FunctionComponent} from "react";

export default interface IconPlugin extends BasePlugin {
  position: IconPluginPosition
  label: string
  group: string
  
  icon: FunctionComponent
  onIconClickRouter: (e: MouseEvent) => string
  onIconContextMenu: (e: MouseEvent) => void
}
