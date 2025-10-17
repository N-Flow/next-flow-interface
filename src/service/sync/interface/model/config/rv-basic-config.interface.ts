import { RvBasicType } from '@/service/sync/interface/model/config/rv-basic-type.enum'

export default interface RvBasicConfig {
  type: RvBasicType
  args?: Record<string, number>
  text?: string
}
