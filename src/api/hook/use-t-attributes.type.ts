import { RvPath } from 'rhine-var'

export type UseTAttributes = (path?: string) => {
  sid: string
  nid: string
  state: Record<string, unknown> | null
  set: (key: string | RvPath, value: unknown) => void
  check: (key: string | RvPath) => void
}
