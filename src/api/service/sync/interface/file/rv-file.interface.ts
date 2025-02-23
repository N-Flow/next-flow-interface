import {FileType} from "@/api/service/sync/interface/file/file-type.enum";
import RvFileInfo from "@/api/service/sync/interface/file/info/rv-file-info.interface";

export default interface RvFile {
  fid: string
  type: FileType
  info: RvFileInfo

  uploading?: boolean

  oss?: {  // Only for oss
    path: string
    bucket: string
  }
  url?: string  // Only for url
  from?: string  // Only for attach
}