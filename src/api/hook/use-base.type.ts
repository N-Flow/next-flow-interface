import { RvPath } from 'rhine-var'

export type UseBase = <T = unknown>(
  path?: string,
) => {
  state: T
  set: (key: string | RvPath, value: unknown) => void
  check: (key: string | RvPath) => void
}
