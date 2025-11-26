import { RvPath, StoredRhineVar } from 'rhine-var'

import RvStep from '@/service/sync/interface/step/rv-step.interface'
import { TNodeSubscriber } from '@/service/target/dto/t-attributes-subscriber.type'
import { TStepSubscriber } from '@/service/target/dto/t-step-subscriber.type'

export default interface TStepServiceApi {
  sid: string

  state: StoredRhineVar<RvStep>

  get(path: string | RvPath): unknown

  set(path: string | RvPath, value: unknown): void

  subscribe(subscriber: TStepSubscriber): () => void

  unsubscribe(subscriber: TStepSubscriber): void

  subscribeNode(subscriber: TNodeSubscriber): () => void

  unsubscribeNode(subscriber: TNodeSubscriber): void
}
