import { RvPath } from 'rhine-var'

export type UseTStep = <T = unknown>(
  path?: string | RvPath,
) => {
  sid: string
  state: T
  set: (key: string | RvPath, value: unknown) => void
  mark: (key: string | RvPath) => void
}
