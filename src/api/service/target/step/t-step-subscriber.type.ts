import {StoredRhineVar, RvPath} from "rhine-var";
import { TStepChangeType } from "./t-step-change-type.enum";

export type TStepSubscriber = (
  type: TStepChangeType,
  path: RvPath,
  value: any,
  oldValue: any,
) => void
