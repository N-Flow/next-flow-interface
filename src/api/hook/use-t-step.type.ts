import { RvPath } from 'rhine-var'

export type UseTStep = <T = unknown>(path?: string) => {
  sid: string
  state: T
  set: (key: string | RvPath, value: unknown) => void
  check: (key: string | RvPath) => void
}
