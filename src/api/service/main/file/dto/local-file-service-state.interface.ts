import FileLoadInfo from "@/api/service/main/file/dto/file-load-info";

export default interface LocalFileServiceState {
  files: { [fid: string]: FileLoadInfo }
  firstLoadedFirstStep: boolean
  firstLoadedAll: boolean
  isLoadedAll: boolean
  successCount: number
  failureCount: number
  allProgress: number
  allTotal: number
}
