import { RvPath, StoredRhineVar } from 'rhine-var'

import { TChangeType } from '@/service/sync/attribute/service/dto/t-change-type.enum'
import RvStep from '@/service/sync/interface/step/rv-step.interface'

import { TargetNodeSubscriber } from './target-node-service-api'

export type TargetStepSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
) => void

export default interface TargetStepServiceApi {
  sid: string

  state: StoredRhineVar<RvStep>

  subscribe(subscriber: TargetStepSubscriber): () => void

  unsubscribe(subscriber: TargetStepSubscriber): void

  subscribeNode(subscriber: TargetNodeSubscriber): () => void

  unsubscribeNode(subscriber: TargetNodeSubscriber): void

  set<T>(path: string | RvPath, value: T): void

  get<T>(path: string | RvPath): T

  isValueChange(type: TChangeType): boolean
}
