import {RecursiveObject} from "rhine-var"
import RvResource from "../../interface/resource/rv-resource.interface"

export enum RvResourceServiceEventType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export type RvResourceServiceSubscriber = (type: RvResourceServiceEventType, fid: string, rvResource?: RecursiveObject<RvResource>) => void
