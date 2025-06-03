import RvFile from "@/api/service/sync/interface/file/rv-file.interface"
import {RecursiveObject} from "rhine-var"

export enum RvFileServiceEventType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}


export type RvFileServiceSubscriber = (type: RvFileServiceEventType, fid: string, rvFile?: RecursiveObject<RvFile>) => void
