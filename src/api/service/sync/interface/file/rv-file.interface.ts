import {RvFileType} from "@/api/service/sync/interface/file/rv-file-type.enum";

export default interface RvFile {
  fid: string
  type: RvFileType

  name: string
  size: number
  hash?: string

  url: string  // For url or oss (https://xxx, oss://{bucket}/{path})

  createdAt: number
  updatedAt: number

  uploading?: boolean

  extra?: any
}