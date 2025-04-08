import { LocalDataStatus } from "../../file/local/dto/local-file-status.enum"

export default interface FileData {
  fid: string
  name: string
  type: string  // File type
  status: LocalDataStatus
  nameWithoutType: string
  description: string
  size: string
  progress: number
  preview?: string
}
