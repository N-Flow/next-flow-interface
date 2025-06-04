import RvLoop from '@/api/service/sync/interface/step/attributes/animation/loop/rv-loop.interface'
import RvNative from '@/api/service/sync/interface/step/attributes/animation/native/rv-native.interface'

export default interface RvAnimation {
  loop?: RvLoop
  embedded?: RvNative
}
