import RvAnimation from '@/service/sync/interface/step/attributes/animation/rv-animation.interface'
import RvBasic from '@/service/sync/interface/step/attributes/basic/rv-basic.interface'
import RvCode from '@/service/sync/interface/step/attributes/code/rv-code.interface'
import RvLabel from '@/service/sync/interface/step/attributes/label/rv-label.interface'
import RvLocation from '@/service/sync/interface/step/attributes/location/rv-location.interface'
import RvMaterial from '@/service/sync/interface/step/attributes/material/rv-material.interface'

export default interface RvAttributes {
  node?: RvBasic
  location?: RvLocation
  material?: RvMaterial
  label?: RvLabel
  animation?: RvAnimation
  code?: RvCode
}
