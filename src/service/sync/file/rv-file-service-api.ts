import { RecursiveMap, StoredRhineVar } from 'rhine-var'

import { RvFileServiceSubscriber } from '@/service/sync/file/dto/rv-file-service-subscriber.type'
import RvFile from '@/service/sync/interface/file/rv-file.interface'

export default interface RvFileServiceApi {
  /**
   * 存储所有文件的 RhineVar 对象
   */
  files: RecursiveMap<RvFile>

  /**
   * 获取文件 不存在则返回 undefined
   *
   * @param fid  文件的 fid
   */
  get(fid: string): StoredRhineVar<RvFile> | undefined

  /**
   * 通过 url 获取文件 不存在则返回 undefined
   *
   * @param url  文件的 url
   */
  getByUrl(url: string): StoredRhineVar<RvFile> | undefined

  /**
   * 是否存在某个文件
   *
   * @param fid
   */
  has(fid: string): boolean

  /**
   * 是否存在某个URL的文件
   *
   * @param url
   */
  hasUrl(url: string): boolean

  /**
   * 添加一个文件
   *
   * @param file  文件内容
   */
  add(file: RvFile): Promise<StoredRhineVar<RvFile> | null>

  /**
   * 通过url添加一个文件。
   *
   * 若该地址对应的文件已存在，则直接返回已存在的文件。
   *
   * @param url  URL
   */
  addByUrl(url: string): Promise<StoredRhineVar<RvFile> | null>

  /**
   * 移除一个文件
   *
   * @param fid  文件的 fid
   */
  remove(fid: string): boolean

  /**
   * 订阅文件服务相关事件
   *
   * @param subscriber
   *
   * @returns 取消订阅函数
   */
  subscribe(subscriber: RvFileServiceSubscriber): () => void

  /**
   * 移除订阅
   *
   * @param subscriber  订阅者
   */
  unsubscribe(subscriber: RvFileServiceSubscriber): void

  /**
   * 订阅文件服务相关事件
   *
   * @param fid  文件的 fid
   * @param subscriber  订阅者
   *
   * @returns 取消订阅函数
   */
  subscribeSingle(fid: string, subscriber: RvFileServiceSubscriber): () => void

  /**
   * 移除订阅
   *
   * @param fid  文件的 fid
   * @param subscriber  订阅者
   */
  unsubscribeSingle(fid: string, subscriber: RvFileServiceSubscriber): void

  /**
   * 生成 Id
   */
  generateId(): string

  /**
   * 查找相同文件
   *
   * @param file  文件
   *
   * @returns 返回相同文件的 fid 如果没有则返回 null
   */
  findSame(file: File): Promise<string | null>
}
