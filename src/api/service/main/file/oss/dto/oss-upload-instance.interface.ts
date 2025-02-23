import {OssUploadInstanceStatus} from "@/api/service/main/file/oss/dto/oss-upload-instance-status.enum";

export default interface OssUploadInstance {

  fid: string
  file: File
  size: number

  status: OssUploadInstanceStatus
  progress: number

}
