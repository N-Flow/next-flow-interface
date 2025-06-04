import { RvPath } from 'rhine-var'

export type UseTStep = <T = any>(
  path?: string,
) => {
  sid: string
  state: T
  set: (key: string | RvPath, value: any) => void
  check: (key: string | RvPath) => void
}
