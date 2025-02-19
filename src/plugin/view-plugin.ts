import {FunctionComponent} from "react";
import BasePlugin from "./base-plugin";
import {PluginViewProps} from "@/plugin/interface/plugin-view-props.interface";

export default interface ViewPlugin extends BasePlugin{
  view: FunctionComponent<PluginViewProps>
  
  onRender: () => void
  onEffect: () => void
}
