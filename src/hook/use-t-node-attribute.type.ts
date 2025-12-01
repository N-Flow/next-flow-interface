import { RecursiveCrossRhineVar, RvPath, StoredRhineVar } from 'rhine-var'

import TNodeAttribute, {
  TNodeAttributeSubscriber,
} from '@/service/sync/attribute/target/t-node-attribute.interface'

export type UseTNodeAttribute = <T extends object = never>(
  path: string | RvPath,
) => {
  state: StoredRhineVar<T> | T
  path: RvPath
  sid: string
  sidList: string[]
  nid: string
  nidList: string[]
  tNodeAttribute: TNodeAttribute<T>
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
