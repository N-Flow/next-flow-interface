import { RvPath, StoredRhineVar } from 'rhine-var'

import RvStep from '@/service/sync/interface/step/rv-step.interface'
import { TChangeType } from '@/service/target/dto/t-change-type.enum'

export type TStepSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
) => void

export default interface TStepServiceApi {
  sid: string

  state: StoredRhineVar<RvStep>

  subscribe(subscriber: TStepSubscriber): () => void

  unsubscribe(subscriber: TStepSubscriber): void
}
