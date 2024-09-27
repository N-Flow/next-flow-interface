import {FunctionComponent} from "react";
import BasePlugin from "./BasePlugin";

export default interface ViewPlugin extends BasePlugin{
  view: FunctionComponent
}
