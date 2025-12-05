import { RecursiveCrossRhineVar, RvPath, StoredRhineVar } from 'rhine-var'

import IGlobalAttribute, {
  GlobalAttributeSubscriber,
} from '@/service/sync/attribute/instance/global-attribute.interface'

export type UseGlobalAttribute = <T extends object = never>(
  path: string | RvPath,
) => {
  state: StoredRhineVar<T> | T
  path: RvPath
  globalAttribute: IGlobalAttribute<T>
  initialize(): void
  isInitialized(): boolean
  mark(path: string | RvPath): void
  get(): RecursiveCrossRhineVar<T> | undefined
  set(path: string | RvPath, value: unknown): void
  read(): StoredRhineVar<T> | T | undefined
  edit(path: string | RvPath, value: unknown): void
  editMany(list: [string | RvPath, unknown][]): void
  subscribe(subscriber: GlobalAttributeSubscriber<T>): () => void
  unsubscribe(subscriber: GlobalAttributeSubscriber<T>): void
}
