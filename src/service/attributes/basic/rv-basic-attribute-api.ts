import RvBasic from '@/service/sync/interface/step/attributes/basic/rv-basic.interface'

export default interface RvBasicAttributeApi {
  key: string

  defaultValue: RvBasic

  generate(nid: string): RvBasic

  ensure(nid: string): boolean
}
