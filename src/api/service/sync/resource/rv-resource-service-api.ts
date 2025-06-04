import {RecursiveMap, RecursiveObject} from "rhine-var"

import RvResource from "@/api/service/sync/interface/resource/rv-resource.interface"
import {RvResourceServiceSubscriber} from "@/api/service/sync/resource/dto/rv-resource-service-subscriber.type"


export default interface RvResourceServiceApi {

  /**
   * 存储所有文件的 RhineVar 对象
   */
  resources: RecursiveMap<RvResource>

  /**
   * 获取文件 不存在则返回 undefined
   *
   * @param fid  文件的 fid
   */
  get(fid: string): RecursiveObject<RvResource> | undefined

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
   */
  add(file: RvResource): void

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
  subscribe(subscriber: RvResourceServiceSubscriber): () => void

  /**
   * 移除订阅
   *
   * @param subscriber  订阅者
   */
  unsubscribe(subscriber: RvResourceServiceSubscriber): void


  /**
   * 订阅文件服务相关事件
   *
   * @param fid  文件的 fid
   * @param subscriber  订阅者
   *
   * @returns 取消订阅函数
   */
  subscribeSingle(fid: string, subscriber: RvResourceServiceSubscriber): () => void

  /**
   * 移除订阅
   *
   * @param fid  文件的 fid
   * @param subscriber  订阅者
   */
  unsubscribeSingle(fid: string, subscriber: RvResourceServiceSubscriber): void

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
