import {RvFileServiceEventType} from "@/api/service/sync/file/dto/rv-file-service-event-type.enum";
import RvFile from "@/api/service/sync/interface/file/rv-file.interface";
import {RecursiveObject} from "rhine-var";

export type RvFileServiceSubscriber = (type: RvFileServiceEventType, fid: string, rvFile?: RecursiveObject<RvFile>) => void
