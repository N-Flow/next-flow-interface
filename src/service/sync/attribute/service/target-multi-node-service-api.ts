import { RvPath } from 'rhine-var'

import { TChangeType } from '@/service/sync/attribute/service/dto/t-change-type.enum'

export type TargetMultiNodeSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
  nid: string,
  nidList: string[],
) => void

export default interface TargetMultiNodeServiceApi {
  sid: string

  nid: string

  nidList: string[]

  subscribe(subscriber: TargetMultiNodeSubscriber): () => void

  unsubscribe(subscriber: TargetMultiNodeSubscriber): void
}
