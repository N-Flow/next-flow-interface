import {FunctionComponent} from "react";
import BasePlugin from "./base-plugin";

export default interface ViewPlugin extends BasePlugin{
  view: FunctionComponent
  
  onRender: () => void
  onEffect: () => void
}
