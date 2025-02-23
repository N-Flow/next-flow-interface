import OssUploadInstance from "@/api/service/main/file/oss/dto/oss-upload-instance.interface";
import {OssUploadEventType} from "@/api/service/main/file/oss/dto/oss-upload-event-type.enum";

export type OssUploadSubscriber = (type: OssUploadEventType, instance: OssUploadInstance) => void
