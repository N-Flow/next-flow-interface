import { RvPath, StoredRhineVar } from 'rhine-var'

import RvNode from '@/service/sync/interface/step/node/rv-node.interface'
import { TNodeSubscriber } from '@/service/target/dto/t-attributes-subscriber.type'

export default interface TNodeServiceApi {
  sid: string

  nid: string

  state: StoredRhineVar<RvNode> | null

  get<T>(path: string | RvPath): T | null

  set<T>(path: string | RvPath, value: T): void

  multiSet<T>(path: string | RvPath, value: T): void

  mark<T>(path: string | RvPath): void

  multiMark<T>(path: string | RvPath): void

  subscribe(subscriber: TNodeSubscriber): () => void

  unsubscribe(subscriber: TNodeSubscriber): void
}
