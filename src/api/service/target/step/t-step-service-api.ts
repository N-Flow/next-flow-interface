import { RvPath, StoredRhineVar } from 'rhine-var'

import { TAttributesSubscriber } from '@/api/service/target/dto/t-attributes-subscriber.type'
import { TSubscriber } from '@/api/service/target/dto/t-subscriber.type'

import RvStep from '../../sync/interface/step/rv-step.interface'

export default interface TStepServiceApi {
  sid: string

  state: StoredRhineVar<RvStep>

  subscribe(subscriber: TSubscriber): () => void

  unsubscribe(subscriber: TSubscriber): void

  set<T>(path: string | RvPath, value: any): void

  get<T>(path: string | RvPath): T

  subscribeAttributes(subscriber: TAttributesSubscriber): () => void

  unsubscribeAttributes(subscriber: TAttributesSubscriber): void
}
