import { RvPath, StoredRhineVar } from 'rhine-var'

import RvAttributes from '@/api/service/sync/interface/step/attributes/rv-attributes.interface'

import { TChangeType } from './t-change-type.enum'

export type TAttributesSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
  nid: string,
  nodeAttributes: StoredRhineVar<RvAttributes> | null,
) => void
