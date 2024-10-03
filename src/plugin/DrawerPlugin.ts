import IconPlugin from "./IconPlugin";
import {FunctionComponent} from "react";

export default interface DrawerPlugin extends IconPlugin {
  drawer: FunctionComponent
  title: string
  tip: string
  weight: number
}
