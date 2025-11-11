import { StoredRhineVar } from 'rhine-var'

import RvAttributes from '@/service/sync/interface/step/attributes/rv-attributes.interface'
import RvStep from '@/service/sync/interface/step/rv-step.interface'

export type BatchApplySubscriber = (selected: string[]) => void

export default interface BatchApplyServiceApi {
  selected: string[]

  selectAll(): void

  unselectAll(): void

  isAllSelected(): boolean

  forEach(f: (rvStep: StoredRhineVar<RvStep>) => void): void

  forEachAttributes(f: (rvAttributes: StoredRhineVar<RvAttributes>) => void): void

  subscribe(subscriber: BatchApplySubscriber): () => void

  unsubscribe(subscriber: BatchApplySubscriber): void
}
