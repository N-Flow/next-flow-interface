import { RvPath, StoredRhineVar } from 'rhine-var'

import RvNode from '@/service/sync/interface/step/attributes/rv-node.interface'

import { TChangeType } from './t-change-type.enum'

export type TAttributesSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
  nid: string,
  nodeAttributes: StoredRhineVar<RvNode> | null,
) => void
