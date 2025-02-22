import IconPlugin from "./icon-plugin";
import {FunctionComponent} from "react";
import DialogCreateOptions from "@/api/service/main/dialog/interface/dialog-create-options.interface";

export default interface DialogPlugin extends IconPlugin {
  onRender?: () => void
  onEffect?: (() => (()=>void))

  options: DialogCreateOptions

  view?: FunctionComponent
}
