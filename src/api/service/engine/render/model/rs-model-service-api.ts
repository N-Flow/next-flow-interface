import {
  RsModelServiceEventType,
  RsModelServiceSubscriber,
} from '@/api/service/engine/render/model/dto/rs-model-service-subscriber.type'
import RsModel from '@/api/service/engine/render/model/dto/rs-model.interface'

export default interface RsModelServiceApi {
  models: Map<string, RsModel>

  get(mid: string): RsModel | undefined

  has(mid: string): boolean

  remove(mid: string): boolean

  add(rsModel: RsModel): boolean

  load(mid: string): Promise<void>

  pause(mid: string): boolean // 暂不支持

  resume(mid: string): boolean // 暂不支持

  cancel(mid: string): boolean // 暂不支持

  subscribe(subscriber: RsModelServiceSubscriber): () => void

  unsubscribe(subscriber: RsModelServiceSubscriber): void

  subscribeSingle(mid: string, subscriber: RsModelServiceSubscriber): () => void

  unsubscribeSingle(mid: string, subscriber: RsModelServiceSubscriber): void

  publish(mid: string, type: RsModelServiceEventType, rsModel: RsModel): void

  afterLoaded(mid: string, subscriber: (rsModel: RsModel) => void): void

  waitLoaded(mid: string): Promise<RsModel>

  /**
   * 是否已经载入完成
   *
   * @param mid  模型 mid
   *
   * @returns  返回模型是否载入完成 模型不存在则返回 undefined
   */
  isLoaded(mid: string): boolean | undefined
}
