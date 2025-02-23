import {RecursiveMap, RecursiveObject} from "rhine-var";
import RvFile from "@/api/service/sync/interface/file/rv-file.interface";
import {RvFileServiceSubscriber} from "@/api/service/sync/file/dto/rv-file-service-subscriber.type";


export default interface RvFileService {

  /**
   * 存储所有文件的 RhineVar 对象
   */
  files: RecursiveMap<RvFile>

  /**
   * 获取文件 不存在则返回 undefined
   *
   * @param fid  文件的 fid
   */
  get(fid: string): RecursiveObject<RvFile> | undefined

  /**
   * 是否存在某个文件
   *
   * @param fid
   */
  has(fid: string): boolean


  /**
   * 添加一个文件
   *
   * @param file  文件内容
   * @param fid  文件的 fid
   */
  add(file: RvFile, fid?: string): void

  /**
   * 移除一个文件
   *
   * @param fid  文件的 fid
   */
  remove(fid: string): boolean


  /**
   * 订阅文件服务相关事件
   *
   * @param subscriber  订阅者
   */
  subscribe(subscriber: RvFileServiceSubscriber): () => void

  /**
   * 移除订阅
   *
   * @param subscriber  订阅者
   */
  unsubscribe(subscriber: RvFileServiceSubscriber): void

}
