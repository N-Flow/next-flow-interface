import { RvPath, StoredRhineVar } from 'rhine-var'

import RvNode from '@/service/sync/interface/step/node/rv-node.interface'
import { TNodeSubscriber } from '@/service/target/dto/t-attributes-subscriber.type'

export default interface TMultiNodeServiceApi {
  sid: string

  nidList: string[]

  lastNid: string

  state: StoredRhineVar<RvNode> | null

  get<T = unknown>(path: string | RvPath): T | null

  set<T = unknown>(path: string | RvPath, value: T): void

  subscribe(subscriber: TNodeSubscriber): () => void

  unsubscribe(subscriber: TNodeSubscriber): void
}
