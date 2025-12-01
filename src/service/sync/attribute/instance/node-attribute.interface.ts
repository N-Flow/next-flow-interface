import { RvPath, StoredRhineVar } from 'rhine-var'

import IBaseAttribute from '@/service/sync/attribute/instance/base-attribute.interface'

export default interface INodeAttribute<T extends object = never> extends IBaseAttribute<T> {
  generate(sid: string, nid: string): T

  initialize(nid: string): void

  isInitialized(nid: string): boolean

  multiInitialize(nidList: string[]): void

  isAllInitialized(nidList: string[]): boolean

  mark(sid: string, nid: string, path: string | RvPath): void

  multiMark(sidList: string[], nidList: string[], path: string | RvPath): void

  get(sid: string, nid: string): StoredRhineVar<T> | undefined

  multiGet(sidList: string[], nidList: string[]): Map<string, Map<string, StoredRhineVar<T>>>

  set(sid: string, nid: string, path: string | RvPath, value: unknown): void

  multiSet(sidList: string[], nidList: string[], path: string | RvPath, value: unknown): void

  read(sid: string, nid: string): StoredRhineVar<T> | T

  multiRead(sidList: string[], nidList: string[]): Map<string, Map<string, StoredRhineVar<T> | T>>

  edit(sid: string, nid: string, path: string | RvPath, value: unknown): void

  multiEdit(sidList: string[], nidList: string[], path: string | RvPath, value: unknown): void
}
