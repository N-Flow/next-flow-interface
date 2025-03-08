import {RecursiveMap, RecursiveObject} from "rhine-var";
import RvModel from "@/api/service/sync/interface/model/rv-model.interface";
import RvNode from "@/api/service/sync/interface/model/node/rv-node.interface";
import {RvModelFormat} from "@/api/service/sync/interface/model/rv-model-format.enum";

export default interface RvModelServiceApi {

  SUPPORT_EXTENSION_LIST: string[]

  models: RecursiveMap<RvModel>

  uploadMulti(fileList: FileList | File[] | File | null | undefined):Promise<void>

  addByFid(fid: string): void

  isSupport(filename: string): boolean

  getModelFormatByFilename(filename: string): RvModelFormat

  get(mid: string): RecursiveObject<RvModel> | undefined

  has(mid: string): boolean

  hasFid(fid: string): boolean

  add(model: RvModel): void

  remove(mid: string): boolean

  hasNode(mid: string): boolean

  setNode(mid: string, node: RvNode): boolean

  generateId(): string

}