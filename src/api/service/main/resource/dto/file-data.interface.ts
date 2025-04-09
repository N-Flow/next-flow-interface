import { LocalDataStatus } from "../../file/local/dto/local-data-status.enum"

export default interface FileData {
  fid: string
  status: LocalDataStatus
  name: string
  progress: number
  mime: string
  description?: string
  size?: string
  preview?: string
}
