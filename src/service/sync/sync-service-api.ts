import { StoredRhineVar } from 'rhine-var'

import RvBase from './interface/rv-base.interface'

export default interface SyncServiceApi {
  state: StoredRhineVar<RvBase>

  clientId: number

  generateId(prefix: string): string

  reset(): boolean
}
