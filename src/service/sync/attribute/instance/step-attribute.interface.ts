import { RvPath, StoredRhineVar } from 'rhine-var'

import IBaseAttribute from '@/service/sync/attribute/instance/base-attribute.interface'
import { TChangeType } from '@/service/sync/attribute/service/dto/t-change-type.enum'

export type StepAttributeTargetSubscriber<T extends object = never> = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
) => void

export default interface IStepAttribute<T extends object = never> extends IBaseAttribute<T> {
  generate(sid: string): T

  initialize(): void

  isInitialized(): boolean

  mark(path: string | RvPath, sid?: string): void

  multiMark(path: string | RvPath, sidList?: string[]): void

  get(sid?: string): StoredRhineVar<T> | undefined

  multiGet(sidList?: string[]): Map<string, StoredRhineVar<T>>

  set(path: string | RvPath, value: unknown, sid?: string): void

  multiSet(path: string | RvPath, value: unknown, sidList?: string[]): void

  read(sid?: string): StoredRhineVar<T> | T

  multiRead(sidList?: string[]): Map<string, StoredRhineVar<T> | T>

  edit(path: string | RvPath, value: unknown, sid?: string): void

  multiEdit(path: string | RvPath, value: unknown, sidList?: string[]): void

  editMany(list: [string | RvPath, unknown][], sid?: string): void

  multiEditMany(list: [string | RvPath, unknown][], sidList?: string[]): void

  readonly targetSid: string

  readonly targetSidList: string[]

  subscribeTarget(subscriber: StepAttributeTargetSubscriber<T>): () => void

  unsubscribeTarget(subscriber: StepAttributeTargetSubscriber<T>): void
}
