import {FunctionComponent} from "react"

import DialogCreateOptions from "@/api/service/main/dialog/dto/dialog-create-options.interface"

import IconPlugin from "./icon-plugin"

export default interface DialogPlugin extends IconPlugin {
  onRender?: () => void
  onEffect?: (() => (()=>void))

  options: DialogCreateOptions

  view?: FunctionComponent
}
