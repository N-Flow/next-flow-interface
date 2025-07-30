import AddLocalDataOption from '@/api/service/main/file/local/dto/add-local-data-option.interface'

import {
  LocalDataServiceEventType,
  LocalDataServiceSubscriber,
} from './dto/local-data-service-subscriber.type'
import { LocalData } from './dto/local-data.type'

export default interface LocalDataServiceApi {
  files: Map<string, LocalData>

  get(fid: string): LocalData | undefined

  has(fid: string): boolean

  remove(fid: string): boolean

  add(localData: AddLocalDataOption): LocalData

  load(fid: string, url: string): Promise<LocalData>

  loadByFile(fid: string, file: File): LocalData

  pause(fid: string): boolean // 暂不支持

  resume(fid: string): boolean // 暂不支持

  cancel(fid: string): boolean // 暂不支持

  getLocalUrl(fid: string): string

  releaseLocalUrl(fid: string): boolean

  subscribe(subscriber: LocalDataServiceSubscriber): () => void

  unsubscribe(subscriber: LocalDataServiceSubscriber): void

  subscribeSingle(fid: string, subscriber: LocalDataServiceSubscriber): () => void

  unsubscribeSingle(fid: string, subscriber: LocalDataServiceSubscriber): void

  publish(fid: string, type: LocalDataServiceEventType, localData: LocalData): void

  afterLoaded(fid: string, subscriber: (localData: LocalData) => void): void

  waitLoaded(fid: string): Promise<LocalData>

  /**
   * 是否已经载入完成
   *
   * @param fid  文件 fid
   *
   * @returns  返回文件是否载入完成 文件不存在则返回 undefined
   */
  isLoaded(fid: string): boolean | undefined
}
