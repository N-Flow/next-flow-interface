import {StoredRhineVar, YPath} from "rhine-var";
import { TStepChangeType } from "./t-step-change-type.enum";

export type TStepSubscriber = (
  type: TStepChangeType,
  path: YPath,
  value: any,
  oldValue: any,
) => void
