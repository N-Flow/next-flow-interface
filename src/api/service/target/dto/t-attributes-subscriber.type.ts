import { RvPath, StoredRhineVar } from "rhine-var"
import { TChangeType } from "./t-change-type.enum"
import RvAttributes from "@/api/service/sync/interface/step/attributes/rv-attributes.interface"

export type TAttributesSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: any,
  oldValue: any,
  sid: string,
  nid: string,
  nodeAttributes: StoredRhineVar<RvAttributes> | null,
) => void
