import { LocalDataStatus } from '@/api/service/main/file/local/dto/local-data-status.enum'
import { LocalDataType } from '@/api/service/main/file/local/dto/local-data-type.enum'

export default interface AddLocalDataOption {
  fid: string
  type: LocalDataType

  blob?: Blob | null
  object?: any | null

  status?: LocalDataStatus
  progress?: number
}
