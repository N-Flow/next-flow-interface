import { RvPath } from 'rhine-var'

export type PathValueArray<T = unknown> = { path: RvPath; value: T }[]
