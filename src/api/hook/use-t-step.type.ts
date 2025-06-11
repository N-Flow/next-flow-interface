import { RvPath } from 'rhine-var'

export type UseTStep = (path?: string) => {
  sid: string
  state: Record<string, unknown>
  set: (key: string | RvPath, value: unknown) => void
  check: (key: string | RvPath) => void
}
