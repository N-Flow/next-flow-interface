import {StoredRhineVar, YPath} from "rhine-var";
import { TStepChangeType } from "./t-step-change-type.enum";

export type TStepSubscriber = (
  path: YPath,
  value: any,
  oldValue: any,
  type: TStepChangeType,
) => void
