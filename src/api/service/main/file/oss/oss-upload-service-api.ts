import OssUploadInstance from '@/api/service/main/file/oss/dto/oss-upload-instance.interface'
import { OssUploadServiceSubscriber } from '@/api/service/main/file/oss/dto/oss-upload-service-subscriber.type'

export default interface OssUploadServiceApi {
  instances: Map<string, OssUploadInstance>

  upload(file: File, fid?: string, mime?: string, hash?: string): Promise<void>

  pause(fid: string): boolean

  resume(fid: string): boolean

  cancel(fid: string): boolean

  get(fid: string): OssUploadInstance | undefined

  has(fid: string): boolean

  hasFile(file: File): boolean

  subscribe(subscriber: OssUploadServiceSubscriber): () => void

  unsubscribe(subscriber: OssUploadServiceSubscriber): void

  subscribeSingle(fid: string, subscriber: OssUploadServiceSubscriber): () => void

  unsubscribeSingle(fid: string, subscriber: OssUploadServiceSubscriber): void
}
