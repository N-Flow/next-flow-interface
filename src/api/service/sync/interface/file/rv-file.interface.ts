import {RvFileType} from "@/api/service/sync/interface/file/rv-file-type.enum";
import RvFileInfo from "@/api/service/sync/interface/file/info/rv-file-info.interface";
import { RvAttachType } from "./rv-attach-type.enum";

export default interface RvFile {
  fid: string
  type: RvFileType

  info: RvFileInfo

  uploading?: boolean

  url?: string  // For url or oss (https://xxx, oss://{bucket}/{path})
  from?: {  // Only for attach
    fid: string
    type: RvAttachType
    path: string
  }
}