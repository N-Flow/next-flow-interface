import { RvFileType } from '@/service/sync/interface/file/rv-file-type.enum'

export default interface RvFile {
  fid: string
  type: RvFileType

  name: string
  size: number
  mime: string
  hash?: string

  url: string // https://xxx  oss://{bucket}/{path}  attach://{fid}

  createdAt: number
  updatedAt: number

  uploading?: boolean

  extra?: Record<string, unknown>
}
