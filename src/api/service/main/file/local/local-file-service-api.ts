import LocalFile from "./dto/base-local-file.interface";

export default interface LocalFileServiceApi {

  files: Map<string, LocalFile>

  get(fid: string): LocalFile | undefined

  add(file: LocalFile): void

  remove(fid: string): void


  load(fid: string): void

  pause(fid: string): void  // 暂不支持

  resume(fid: string): void  // 暂不支持

  cancel(fid: string): void


  /**
   * 是否已经载入完成
   *
   * @param fid  文件 fid
   *
   * @returns  返回文件是否载入完成 文件不存在则返回 undefined
   */
  isLoaded(fid: string): boolean | undefined

}
