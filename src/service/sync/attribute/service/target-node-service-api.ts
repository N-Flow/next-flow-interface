import { RvPath, StoredRhineVar } from 'rhine-var'

import { TChangeType } from '@/service/sync/attribute/service/dto/t-change-type.enum'
import RvNode from '@/service/sync/interface/step/node/rv-node.interface'

export type TargetNodeSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
  nid: string,
  rvNode: StoredRhineVar<RvNode> | null,
) => void

export default interface TargetNodeServiceApi {
  sid: string

  nid: string

  state: StoredRhineVar<RvNode> | null

  subscribe(subscriber: TargetNodeSubscriber): () => void

  unsubscribe(subscriber: TargetNodeSubscriber): void
}
