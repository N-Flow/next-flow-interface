import { RvPath, StoredRhineVar } from 'rhine-var'

import RvNode from '@/service/sync/interface/step/node/rv-node.interface'

import { TChangeType } from './t-change-type.enum'

export type TNodeSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
  nid: string,
  rvNode: StoredRhineVar<RvNode> | null,
) => void
