import RvLoop from '@/service/sync/interface/step/node/animation/loop/rv-loop.interface'
import RvNative from '@/service/sync/interface/step/node/animation/native/rv-native.interface'

export default interface RvAnimation {
  loop?: RvLoop
  embedded?: RvNative
}
