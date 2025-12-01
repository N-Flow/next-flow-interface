import { RvPath } from 'rhine-var'

import { TChangeType } from '@/service/sync/attribute/service/dto/t-change-type.enum'

export type TMultiNodeSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
  nid: string,
  nidList: string[],
) => void

export default interface TMultiNodeServiceApi {
  sid: string

  nid: string

  nidList: string[]

  subscribe(subscriber: TMultiNodeSubscriber): () => void

  unsubscribe(subscriber: TMultiNodeSubscriber): void
}
