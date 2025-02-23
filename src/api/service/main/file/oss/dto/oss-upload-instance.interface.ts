import {OssUploadInstanceStatus} from "@/api/service/main/file/oss/dto/oss-upload-instance-status.enum";

export default interface OssUploadInstance {

  fid: string

  file: File

  // 上传任务
  status: OssUploadInstanceStatus
  progress: number

}
