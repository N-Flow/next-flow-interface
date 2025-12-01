import { RecursiveCrossRhineVar, RvPath, StoredRhineVar } from 'rhine-var'

import INodeAttribute from '@/service/sync/attribute/instance/node-attribute.interface'
import { TChangeType } from '@/service/sync/attribute/service/dto/t-change-type.enum'
import TMultiNodeServiceApi from '@/service/sync/attribute/service/t-multi-node-service-api'

export type TNodeAttributeSubscriber<T extends object = never> = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
  nid: string,
  rvNode: StoredRhineVar<T> | null,
) => void

export default interface ITNodeAttribute<T extends object = never> {
  attribute: INodeAttribute<T>
  tMultiNodeService: TMultiNodeServiceApi
  readonly path: RvPath
  readonly sid: string
  readonly sidList: string[]
  readonly nid: string
  readonly nidList: string[]
  initialize(nid?: string): void
  isInitialize(nid?: string): boolean
  multiInitialize(nidList?: string[]): void
  isAllInitialized(nidList?: string[]): boolean
  mark(path: string | RvPath, sid?: string, nid?: string): void
  multiMark(path: string | RvPath, sidList?: string[], nidList?: string[]): void
  get(sid?: string, nid?: string): RecursiveCrossRhineVar<T> | undefined
  multiGet(sidList?: string[], nidList?: string[]): Map<string, Map<string, StoredRhineVar<T>>>
  set(path: string | RvPath, value: unknown, sid?: string, nid?: string): void
  multiSet(path: string | RvPath, value: unknown, sidList?: string[], nidList?: string[]): void
  read(sid?: string, nid?: string): StoredRhineVar<T> | T | undefined
  multiRead(sidList?: string[], nidList?: string[]): Map<string, Map<string, StoredRhineVar<T> | T>>
  edit(path: string | RvPath, value: unknown, sid?: string, nid?: string): void
  multiEdit(path: string | RvPath, value: unknown, sidList?: string[], nidList?: string[]): void
  subscribe(subscriber: TNodeAttributeSubscriber<T>): () => void
  unsubscribe(subscriber: TNodeAttributeSubscriber<T>): void
}
