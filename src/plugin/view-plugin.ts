import {FunctionComponent} from "react"

import {PluginViewProps} from "@/plugin/dto/plugin-view-props.interface"

import BasePlugin from "./base-plugin"

export default interface ViewPlugin extends BasePlugin {
  view: FunctionComponent<PluginViewProps>
  
  onRender?: () => void
  onEffect?: (() => (()=>void))
}
