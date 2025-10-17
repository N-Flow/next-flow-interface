import RvCode from '@/service/sync/interface/step/attributes/code/rv-code.interface'

export default interface RvCodeAttributeApi {
  key: string

  defaultValue: RvCode

  generate(): RvCode

  ensure(nid: string): boolean
}
