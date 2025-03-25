import RvNative from "@/api/service/sync/interface/step/attributes/animation/native/rv-native.interface";

export default interface RvNativeAttributeApi {

  key: string

  defaultValue: RvNative

  generate(nid: string): RvNative

  ensure(nid: string): boolean

}