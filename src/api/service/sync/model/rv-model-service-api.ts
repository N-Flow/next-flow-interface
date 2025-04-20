import {RecursiveMap, RecursiveObject} from "rhine-var";
import RvModel from "@/api/service/sync/interface/model/rv-model.interface";
import RvNode from "@/api/service/sync/interface/model/node/rv-node.interface";

export default interface RvModelServiceApi {

  models: RecursiveMap<RvModel>

  uploadMulti(fileList: FileList | File[] | File | null | undefined, check?: boolean):Promise<void>

  addByFid(fid: string): void

  get(mid: string): RecursiveObject<RvModel> | undefined

  has(mid: string): boolean

  hasFid(fid: string): boolean

  add(model: RvModel): void

  remove(mid: string): boolean

  hasNode(mid: string): boolean

  setNode(mid: string, node: RvNode): boolean

  generateId(): string

}