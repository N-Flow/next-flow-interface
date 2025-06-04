import {RecursiveObject} from "rhine-var"

import RvFile from "@/api/service/sync/interface/file/rv-file.interface"

export enum RvFileServiceEventType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}


export type RvFileServiceSubscriber = (type: RvFileServiceEventType, fid: string, rvFile?: RecursiveObject<RvFile>) => void
