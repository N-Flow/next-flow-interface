import { RvPath } from 'rhine-var'

export type UseTargetNode = <T = unknown>(
  path?: string | RvPath,
) => {
  sid: string
  nid: string
  state: T | null
  set: (key: string | RvPath, value: unknown) => void
  multiSet: (key: string | RvPath, value: unknown) => void
  mark: (key: string | RvPath) => void
  multiMark: (key: string | RvPath) => void
}
