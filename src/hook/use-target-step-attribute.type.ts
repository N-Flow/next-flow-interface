import { RecursiveCrossRhineVar, RvPath, StoredRhineVar } from 'rhine-var'

import IStepAttribute, {
  StepAttributeTargetSubscriber,
} from '@/service/sync/attribute/instance/step-attribute.interface'

export type UseTargetStepAttribute = <T extends object = never>(
  path: string | RvPath,
) => {
  state: StoredRhineVar<T> | T
  path: RvPath
  sid: string
  stepAttribute: IStepAttribute<T>
  initialize(): void
  isInitialized(): boolean
  mark(path: string | RvPath, sid?: string): void
  multiMark(path: string | RvPath, sidList?: string[]): void
  get(sid?: string): RecursiveCrossRhineVar<T> | undefined
  multiGet(sidList?: string[]): Map<string, StoredRhineVar<T>>
  set(path: string | RvPath, value: unknown, sid?: string): void
  multiSet(path: string | RvPath, value: unknown, sidList?: string[]): void
  read(sid?: string): StoredRhineVar<T> | T | undefined
  multiRead(sidList?: string[]): Map<string, StoredRhineVar<T> | T>
  edit(path: string | RvPath, value: unknown, sid?: string): void
  multiEdit(path: string | RvPath, value: unknown, sidList?: string[]): void
  editMany(list: [string | RvPath, unknown][], sid?: string): void
  multiEditMany(list: [string | RvPath, unknown][], sidList?: string[]): void
  subscribe(subscriber: StepAttributeTargetSubscriber<T>): () => void
  unsubscribe(subscriber: StepAttributeTargetSubscriber<T>): void
}
