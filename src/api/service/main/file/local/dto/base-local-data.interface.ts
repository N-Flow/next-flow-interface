import {LocalDataStatus} from "@/api/service/main/file/local/dto/local-data-status.enum";

export default interface BaseLocalData {

  fid: string

  // 下载任务
  status: LocalDataStatus
  progress: number  // 已下载字节数

  url?: string

}
