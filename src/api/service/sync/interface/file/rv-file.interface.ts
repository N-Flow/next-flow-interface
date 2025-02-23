import {RvFileType} from "@/api/service/sync/interface/file/rv-file-type.enum";
import RvFileInfo from "@/api/service/sync/interface/file/info/rv-file-info.interface";
import { AttachType } from "./attach-type.enum";

export default interface RvFile {
  fid: string
  type: RvFileType

  info: RvFileInfo

  uploading?: boolean

  oss?: {  // Only for oss
    path: string
    bucket: string
  }
  url?: string  // Only for url
  from?: {  // Only for attach
    fid: string
    type: AttachType
    path: string
  }
}