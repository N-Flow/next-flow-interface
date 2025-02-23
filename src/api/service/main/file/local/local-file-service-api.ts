import {LocalFileServiceSubscriber} from "./dto/local-file-service-subscriber.type";
import {LocalFile} from "./dto/local-file.type";

export default interface LocalFileServiceApi {

  files: Map<string, LocalFile>


  get(fid: string): LocalFile | undefined

  add(localFile: LocalFile): void

  addByFile(fid: string, file: File): LocalFile

  remove(fid: string): void


  load(fid: string): void

  pause(fid: string): void  // 暂不支持

  resume(fid: string): void  // 暂不支持

  cancel(fid: string): void


  subscribe(subscriber: LocalFileServiceSubscriber): () => void

  unsubscribe(subscriber: LocalFileServiceSubscriber): void

  subscribeSingle(fid: string, subscriber: LocalFileServiceSubscriber): () => void

  unsubscribeSingle(fid: string, subscriber: LocalFileServiceSubscriber): void


  /**
   * 是否已经载入完成
   *
   * @param fid  文件 fid
   *
   * @returns  返回文件是否载入完成 文件不存在则返回 undefined
   */
  isLoaded(fid: string): boolean | undefined

}
