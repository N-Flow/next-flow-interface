import { LocalFile } from "./local-file.type";
import {LocalFileServiceEventType} from "./local-file-service-event-type.enum";

export type LocalFileServiceSubscriber = (type: LocalFileServiceEventType, localFile: LocalFile) => void
