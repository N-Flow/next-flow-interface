import { RvPath, StoredRhineVar } from 'rhine-var'

import IBaseAttribute from '@/service/sync/attribute/instance/base-attribute.interface'
import { TargetNodeAttributeSubscriber } from '@/service/sync/attribute/target/target-node-attribute.interface'

export default interface INodeAttribute<T extends object = never> extends IBaseAttribute<T> {
  generate(sid?: string, nid?: string): T

  initialize(nid?: string): void

  isInitialized(nid?: string): boolean

  multiInitialize(nidList?: string[]): void

  isAllInitialized(nidList?: string[]): boolean

  mark(path: string | RvPath, sid?: string, nid?: string): void

  multiMark(path: string | RvPath, sidList?: string[], nidList?: string[]): void

  get(sid?: string, nid?: string): StoredRhineVar<T> | undefined

  multiGet(sidList?: string[], nidList?: string[]): Map<string, Map<string, StoredRhineVar<T>>>

  set(path: string | RvPath, value: unknown, sid?: string, nid?: string): void

  multiSet(path: string | RvPath, value: unknown, sidList?: string[], nidList?: string[]): void

  read(sid?: string, nid?: string): StoredRhineVar<T> | T

  multiRead(sidList?: string[], nidList?: string[]): Map<string, Map<string, StoredRhineVar<T> | T>>

  edit(path: string | RvPath, value: unknown, sid?: string, nid?: string): void

  multiEdit(path: string | RvPath, value: unknown, sidList?: string[], nidList?: string[]): void

  editMany(list: [string | RvPath, unknown][], sid?: string, nid?: string): void

  multiEditMany(list: [string | RvPath, unknown][], sidList?: string[], nidList?: string[]): void

  readonly targetSid: string

  readonly targetSidList: string[]

  readonly targetNid: string

  readonly targetNidList: string[]

  subscribe(subscriber: TargetNodeAttributeSubscriber<T>): () => void

  unsubscribe(subscriber: TargetNodeAttributeSubscriber<T>): void
}
