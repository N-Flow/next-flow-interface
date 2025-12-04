import { EventType, RvPath, StoredRhineVar } from 'rhine-var'

import IBaseAttribute from '@/service/sync/attribute/instance/base-attribute.interface'

export type GlobalAttributeSubscriber<T> = (
  type: EventType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
) => void

export default interface IGlobalAttribute<T extends object = never> extends IBaseAttribute<T> {
  generate(): T

  initialize(): void

  isInitialized(): boolean

  mark(path: string | RvPath): void

  get(): StoredRhineVar<T> | undefined

  set(path: string | RvPath, value: unknown): void

  read(): StoredRhineVar<T> | T

  edit(path: string | RvPath, value: unknown): void

  editMany(list: [string | RvPath, unknown][]): void

  subscribe(subscriber: GlobalAttributeSubscriber<T>): () => void

  unsubscribe(subscriber: GlobalAttributeSubscriber<T>): void
}
