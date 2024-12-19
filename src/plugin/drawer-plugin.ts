import IconPlugin from "./icon-plugin";
import {FunctionComponent} from "react";

export default interface DrawerPlugin extends IconPlugin {
  title: string
  tip: string
  weight: number
  
  drawer: FunctionComponent
  
  onRender?: () => void
  onEffect?: () => void

  onTitleClick?: () => void
  onTitleContextMenu?: () => void
}
