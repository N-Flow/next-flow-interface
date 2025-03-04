import {RecursiveMap, RecursiveObject} from "rhine-var";
import RvModel from "@/api/service/sync/interface/model/rv-model.interface";
import RvNode from "@/api/service/sync/interface/model/node/rv-node.interface";

export default interface RvModelServiceApi {

  models: RecursiveMap<RvModel>

  get(mid: string): RecursiveObject<RvModel> | undefined

  has(mid: string): boolean

  add(model: RvModel): void

  remove(mid: string): boolean

  setNode(mid: string, node: RvNode): boolean

  generateId(): string

}