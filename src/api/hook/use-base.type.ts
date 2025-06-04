import { RvPath } from 'rhine-var'

export type UseBase = <T = any>(
  path?: string,
) => {
  state: T
  set: (key: string | RvPath, value: any) => void
  check: (key: string | RvPath) => void
}
