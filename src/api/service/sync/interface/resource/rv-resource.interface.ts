import {RvAttachType} from "@/api/service/sync/interface/resource/rv-attach-type.enum";
import {RvResourceType} from "@/api/service/sync/interface/resource/rv-resource-type.enum";

export default interface RvResource {
  fid: string

  name: string
  type: RvResourceType

  preview?: string
  description?: string

  from?: {  // Only for attach
    fid: string
    type: RvAttachType
    path: string
  }

  createdAt: number
  updatedAt: number

  extra?: any
}
