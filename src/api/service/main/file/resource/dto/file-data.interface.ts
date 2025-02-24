import { LocalFileStatus } from "../../local/dto/local-file-status.enum"

export default interface FileData {
  fid: string
  name: string
  type: string  // File type
  status: LocalFileStatus
  nameWithoutType: string
  description: string
  size: string
  progress: number
  preview?: File
}
