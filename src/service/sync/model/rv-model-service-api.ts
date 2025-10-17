import { RecursiveMap, RecursiveObject } from 'rhine-var'

import RvModel from '@/service/sync/interface/model/rv-model.interface'

export default interface RvModelServiceApi {
  models: RecursiveMap<RvModel>

  uploadMulti(fileList: FileList | File[] | File | null | undefined, check?: boolean): Promise<void>

  addByFid(fid: string): string

  get(mid: string): RecursiveObject<RvModel> | undefined

  has(mid: string): boolean

  hasFid(fid: string): boolean

  add(model: RvModel): string

  remove(mid: string): boolean

  hasNode(mid: string): boolean

  setNode(mid: string, node: string): boolean

  generateId(): string
}
