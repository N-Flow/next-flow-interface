import RvLoop from '@/service/sync/interface/step/attributes/animation/loop/rv-loop.interface'
import RvNative from '@/service/sync/interface/step/attributes/animation/native/rv-native.interface'

export default interface RvAnimation {
  loop?: RvLoop
  embedded?: RvNative
}
