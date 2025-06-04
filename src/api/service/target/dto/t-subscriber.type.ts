import { RvPath } from "rhine-var"

import { TChangeType } from "./t-change-type.enum"

export type TSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: any,
  oldValue: any,
  sid: string,
) => void
