import { RvPath, StoredRhineVar } from 'rhine-var'

import RvNode from '@/service/sync/interface/step/attributes/rv-node.interface'
import { TAttributesSubscriber } from '@/service/target/dto/t-attributes-subscriber.type'

export default interface TAttributesServiceApi {
  sid: string

  nid: string

  state: StoredRhineVar<RvNode> | null

  subscribe(subscriber: TAttributesSubscriber): () => void

  unsubscribe(subscriber: TAttributesSubscriber): void

  set<T>(path: string | RvPath, value: T): void

  multiSet<T>(path: string | RvPath, value: T): void

  check<T>(path: string | RvPath): void

  multiCheck<T>(path: string | RvPath): void

  get<T>(path: string | RvPath): T | null
}
