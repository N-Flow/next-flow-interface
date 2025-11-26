import { StoredRhineVar } from 'rhine-var'

import RvNode from '@/service/sync/interface/step/attributes/rv-node.interface'
import RvStep from '@/service/sync/interface/step/rv-step.interface'

export type BatchApplySubscriber = (selected: string[]) => void

export default interface BatchApplyServiceApi {
  selected: string[]

  selectAll(): void

  unselectAll(): void

  isAllSelected(): boolean

  forEach(f: (rvStep: StoredRhineVar<RvStep>) => void): void

  forEachAttributes(f: (rvAttributes: StoredRhineVar<RvNode>) => void): void

  subscribe(subscriber: BatchApplySubscriber): () => void

  unsubscribe(subscriber: BatchApplySubscriber): void
}
