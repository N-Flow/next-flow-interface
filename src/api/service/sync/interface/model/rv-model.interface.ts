import {RhineVarMap} from "rhine-var"
import {ModelOrigin} from "@/api/service/sync/interface/model/model-origin.enum";
import {ModelFormat} from "@/api/service/sync/interface/model/model-format.enum";

export default interface RvModel {
  origin: ModelOrigin
  name: string
  format: ModelFormat
  icon: string
  group: string
  path: string
  file: string
  keys: string[]
  mid: string
  args: any
  fid: string
}