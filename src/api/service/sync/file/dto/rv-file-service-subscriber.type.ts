import {RvFileServiceEventType} from "@/api/service/sync/file/dto/rv-file-service-event-type.enum";
import RvFile from "@/api/service/sync/interface/file/rv-file.interface";

export type RvFileServiceSubscriber = (type: RvFileServiceEventType, file?: RvFile) => void
