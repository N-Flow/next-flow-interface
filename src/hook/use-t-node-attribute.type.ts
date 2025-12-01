import { RvPath, StoredRhineVar } from 'rhine-var'

import TNodeAttribute from '@/service/sync/attribute/dto/target/t-node-attribute.interface'

export type UseTNodeAttribute = <T extends object = never>(
  path: string | RvPath,
) => {
  state: StoredRhineVar<T> | T
  sid: string
  sidList: string[]
  nid: string
  nidList: string[]
  tna: TNodeAttribute<T>
}
