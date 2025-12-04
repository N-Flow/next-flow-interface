import { RvPath } from 'rhine-var'

export type UseTargetNode = <T = unknown>(
  path?: string | RvPath,
) => {
  state: T | null
  sid: string
  nid: string
  nidList: string[]
}
