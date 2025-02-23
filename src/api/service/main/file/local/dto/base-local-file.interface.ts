import {LocalFileStatus} from "@/api/service/main/file/local/dto/local-file-status.enum";

export default interface BaseLocalFile {

  fid: string

  // 下载任务
  status: LocalFileStatus
  progress: number  // 已下载字节数

}
