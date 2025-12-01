import { RvPath, StoredRhineVar } from 'rhine-var'

import RvNode from '@/service/sync/interface/step/node/rv-node.interface'
import { TChangeType } from '@/service/target/dto/t-change-type.enum'

export type TMultiNodeSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
  nid: string,
  rvNode: StoredRhineVar<RvNode> | null,
) => void

export default interface TMultiNodeServiceApi {
  sid: string

  nid: string

  nidList: string[]

  state: Map<string, StoredRhineVar<RvNode>>

  subscribe(subscriber: TMultiNodeSubscriber): () => void

  unsubscribe(subscriber: TMultiNodeSubscriber): void
}
