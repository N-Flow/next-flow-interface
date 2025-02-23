import OssUploadInstance from "@/api/service/main/file/oss/dto/oss-upload-instance.interface";
import {OssUploadServiceEventType} from "@/api/service/main/file/oss/dto/oss-upload-service-event-type.enum";

export type OssUploadServiceSubscriber = (type: OssUploadServiceEventType, instance: OssUploadInstance) => void
