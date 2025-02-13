import {FileType} from "@/api/service/sync/interface/files/file-type.enum";
import RvFileInfo from "@/api/service/sync/interface/files/file-info/rv-file-info.interface";

export default interface RvFile {
  fid: string
  type: FileType
  ossPath: string
  ossBucket: string
  uploading: boolean
  info: RvFileInfo
  url: string
  attachFrom: string
}