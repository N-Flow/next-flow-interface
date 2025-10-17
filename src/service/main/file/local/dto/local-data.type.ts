import { BaseTexture, Material } from '@babylonjs/core'

import { LocalDataStatus } from '@/service/main/file/local/dto/local-data-status.enum'
import { LocalDataType } from '@/service/main/file/local/dto/local-data-type.enum'

export interface LocalData {
  fid: string

  type: LocalDataType
  mime: string

  status: LocalDataStatus
  progress: number

  url?: string
  blob?: Blob
  text?: string
  json?: unknown
  texture?: BaseTexture
  material?: Material
  uv?: unknown
  object?: unknown
}
