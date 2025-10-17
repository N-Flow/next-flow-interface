import { RvPath } from 'rhine-var'

import { TChangeType } from './t-change-type.enum'

export type TSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: unknown,
  oldValue: unknown,
  sid: string,
) => void
