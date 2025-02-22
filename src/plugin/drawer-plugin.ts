import IconPlugin from "./icon-plugin";
import {FunctionComponent} from "react";
import {PluginViewProps} from "@/plugin/dto/plugin-view-props.interface";

export default interface DrawerPlugin extends IconPlugin {
  title: string
  tip: string
  weight: number
  
  drawer: FunctionComponent<PluginViewProps>
  
  onRender?: () => void
  onEffect?: () => void

  onTitleClick?: () => void
  onTitleContextMenu?: () => void
}
