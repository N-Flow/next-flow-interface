import RvAnimation from "@/api/service/sync/interface/step/attributes/animation/rv-animation.interface"
import RvCode from "@/api/service/sync/interface/step/attributes/code/rv-code.interface"
import RvLabel from "@/api/service/sync/interface/step/attributes/label/rv-label.interface"
import RvLocation from "@/api/service/sync/interface/step/attributes/location/rv-location.interface"
import RvMaterial from "@/api/service/sync/interface/step/attributes/material/rv-material.interface"

export default interface RvAttributes {
  location?: RvLocation
  material?: RvMaterial
  label?: RvLabel
  animation?: RvAnimation
  code?: RvCode
}
