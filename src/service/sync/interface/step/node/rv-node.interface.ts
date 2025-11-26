import RvAnimation from '@/service/sync/interface/step/node/animation/rv-animation.interface'
import RvBasic from '@/service/sync/interface/step/node/basic/rv-basic.interface'
import RvCode from '@/service/sync/interface/step/node/code/rv-code.interface'
import RvLabel from '@/service/sync/interface/step/node/label/rv-label.interface'
import RvLocation from '@/service/sync/interface/step/node/location/rv-location.interface'
import RvMaterial from '@/service/sync/interface/step/node/material/rv-material.interface'

export default interface RvNode {
  basic?: RvBasic
  location?: RvLocation
  material?: RvMaterial
  label?: RvLabel
  animation?: RvAnimation
  code?: RvCode
}
