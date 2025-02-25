import OssUploadInstance from "@/api/service/main/file/oss/dto/oss-upload-instance.interface";

export type OssUploadServiceSubscriber = (type: OssUploadServiceEventType, ossUploadInstance: OssUploadInstance) => void

export enum OssUploadServiceEventType {
  START = 'START',
  PROGRESS = 'PROGRESS',
  PAUSE = 'PAUSE',
  RESUME = 'RESUME',
  UPLOADED = 'UPLOADED',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
}

