import OssUploadInstance from "@/api/service/main/file/oss/dto/oss-upload-instance.interface";
import {OssUploadSubscriber} from "@/api/service/main/file/oss/dto/oss-upload-subscriber.type";

export default interface OssUploadServiceApi {

  instances: OssUploadInstance[]


  upload(fid: string, file: File): OssUploadInstance

  pause(fid: string): boolean

  resume(fid: string): boolean

  cancel(fid: string): boolean


  get(fid: string): OssUploadInstance | undefined


  has(fid: string): boolean

  hasFile(file: File): boolean


  subscribe(fid: string, subscriber: OssUploadSubscriber): () => void

  unsubscribe(fid: string, subscriber: OssUploadSubscriber): void

}
