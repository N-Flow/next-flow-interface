import { LocalDataStatus } from '@/service/main/file/local/dto/local-data-status.enum'

import { LocalData } from './local-data.type'

export default interface AddLocalDataOptionInterface
  extends Omit<LocalData, 'status' | 'progress'> {
  status?: LocalDataStatus
  progress?: number
}
