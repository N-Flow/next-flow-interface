import RvCode from '@/service/sync/interface/step/node/code/rv-code.interface'

export default interface RvCodeAttributeApi {
  key: string

  defaultValue: RvCode

  generate(): RvCode

  ensure(nid: string): boolean
}
