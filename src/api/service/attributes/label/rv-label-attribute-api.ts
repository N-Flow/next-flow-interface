import {Node} from "@babylonjs/core"
import RvLabel from "@/api/service/sync/interface/step/attributes/label/rv-label.interface"

export default interface RvLabelAttributeApi {

  key: string

  defaultValue: RvLabel

  generate(): RvLabel

  ensure(nid: string): boolean

}