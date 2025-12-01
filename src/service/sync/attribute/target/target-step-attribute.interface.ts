import { RecursiveCrossRhineVar, RvPath, StoredRhineVar } from 'rhine-var'

import INodeAttribute from '@/service/sync/attribute/instance/node-attribute.interface'
import { TChangeType } from '@/service/sync/attribute/service/dto/t-change-type.enum'
import TargetMultiNodeServiceApi from '@/service/sync/attribute/service/t-multi-node-service-api'

export type TargetStepAttributeSubscriber<T extends object = never> = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
) => void

export default interface ITargetStepAttribute<T extends object = never> {
  attribute: INodeAttribute<T>
  tMultiNodeService: TargetMultiNodeServiceApi
  readonly path: RvPath
  readonly sid: string
  readonly sidList: string[]
  initialize(): void
  isInitialize(): boolean
  multiInitialize(): void
  isAllInitialized(): boolean
  mark(path: string | RvPath, sid?: string): void
  multiMark(path: string | RvPath, sidList?: string[]): void
  get(sid?: string): RecursiveCrossRhineVar<T> | undefined
  multiGet(sidList?: string[]): Map<string, Map<string, StoredRhineVar<T>>>
  set(path: string | RvPath, value: unknown, sid?: string): void
  multiSet(path: string | RvPath, value: unknown, sidList?: string[]): void
  read(sid?: string): StoredRhineVar<T> | T | undefined
  multiRead(sidList?: string[]): Map<string, Map<string, StoredRhineVar<T> | T>>
  edit(path: string | RvPath, value: unknown, sid?: string): void
  multiEdit(path: string | RvPath, value: unknown, sidList?: string[]): void
  subscribe(subscriber: TargetStepAttributeSubscriber<T>): () => void
  unsubscribe(subscriber: TargetStepAttributeSubscriber<T>): void
}
