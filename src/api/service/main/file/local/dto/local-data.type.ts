import { LocalDataStatus } from '@/api/service/main/file/local/dto/local-data-status.enum'
import { LocalDataType } from '@/api/service/main/file/local/dto/local-data-type.enum'
import { BaseTexture } from '@babylonjs/core'

export interface LocalData {
  fid: string
  type: LocalDataType

  status: LocalDataStatus
  progress: number

  url?: string
  blob?: Blob
  text?: string
  json?: unknown
  texture?: BaseTexture
  object?: unknown
}
