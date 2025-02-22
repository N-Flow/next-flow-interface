import {FunctionComponent} from "react";
import BasePlugin from "./base-plugin";
import {PluginViewProps} from "@/plugin/dto/plugin-view-props.interface";

export default interface ViewPlugin extends BasePlugin{
  view: FunctionComponent<PluginViewProps>
  
  onRender: () => void
  onEffect: () => void
}
