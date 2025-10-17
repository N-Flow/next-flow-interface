import { LocalDataStatus } from '../../file/local/dto/local-data-status.enum'

export default interface FileData {
  fid: string
  status: LocalDataStatus
  name: string
  progress: number
  mime: string
  filename?: string // For resource with file
  extension?: string // For resource with file
  description?: string
  size?: string
  preview?: string
}
