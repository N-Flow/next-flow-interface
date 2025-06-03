import {LocalDataType} from "@/api/service/main/file/local/dto/local-data-type.enum"
import {LocalDataStatus} from "@/api/service/main/file/local/dto/local-data-status.enum"

export default interface AddLocalDataOption {
  fid: string
  type: LocalDataType

  blob?: Blob | null
  object?: any | null

  status?: LocalDataStatus
  progress?: number
}
