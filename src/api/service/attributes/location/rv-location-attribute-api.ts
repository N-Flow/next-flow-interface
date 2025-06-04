import { Node } from "@babylonjs/core"

import RvLocation from "@/api/service/sync/interface/step/attributes/location/rv-location.interface"

export default interface RvLocationAttributeApi {

  key: string

  defaultValue: RvLocation

  generate(node: Node | undefined | null): RvLocation

  ensure(nid: string): boolean

}