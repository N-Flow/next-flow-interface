import { RvPath } from 'rhine-var'

export type UseTAttributes = <T = unknown>(
  path?: string,
) => {
  sid: string
  nid: string
  state: T | null
  set: (key: string | RvPath, value: unknown) => void
  multiSet: (key: string | RvPath, value: unknown) => void
  check: (key: string | RvPath) => void
  multiCheck: (key: string | RvPath) => void
}
