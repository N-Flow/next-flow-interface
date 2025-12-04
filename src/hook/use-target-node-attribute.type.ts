import { RecursiveCrossRhineVar, RvPath, StoredRhineVar } from 'rhine-var'

import INodeAttribute, {
  NodeAttributeTargetSubscriber,
} from '@/service/sync/attribute/instance/node-attribute.interface'

export type UseTargetNodeAttribute = <T extends object = never>(
  path: string | RvPath,
) => {
  state: StoredRhineVar<T> | T
  path: RvPath
  sid: string
  sidList: string[]
  nid: string
  nidList: string[]
  NodeAttribute: INodeAttribute<T>
  initialize(nid?: string): void
  isInitialized(nid?: string): boolean
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
  subscribe(subscriber: NodeAttributeTargetSubscriber<T>): () => void
  unsubscribe(subscriber: NodeAttributeTargetSubscriber<T>): void
}
