import { RvPath } from 'rhine-var'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UseBase = <T = any>(
  path?: string,
) => {
  state: T
  set: (key: string | RvPath, value: T) => void
  check: (key: string | RvPath) => void
}
