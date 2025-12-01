import { StoredRhineVar } from 'rhine-var'

import TNodeAttribute from '@/service/sync/attribute/dto/target/t-node-attribute.interface'

export interface UseTNodeAttribute<T extends object = never> {
  state: StoredRhineVar<T> | T
  sid: string
  sidList: string[]
  nid: string
  nidList: string[]
  tna: TNodeAttribute<T>
}
