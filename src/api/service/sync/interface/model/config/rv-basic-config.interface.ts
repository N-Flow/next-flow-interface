import {RvBasicType} from "@/api/service/sync/interface/model/config/rv-basic-type.enum"

export default interface RvBasicConfig {
  type: RvBasicType
  args?: {[key: string]: number}
  text?: string
}
