import RvNative from '@/service/sync/interface/step/node/animation/native/rv-native.interface'

export default interface RvNativeAttributeApi {
  key: string

  defaultValue: RvNative

  generate(nid: string): RvNative

  ensure(nid: string): boolean
}
