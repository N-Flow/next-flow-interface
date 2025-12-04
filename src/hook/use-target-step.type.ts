import { RvPath } from 'rhine-var'

export type UseTargetStep = <T = unknown>(
  path?: string | RvPath,
) => {
  state: T
  sid: string
}
