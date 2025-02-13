import {RhineVarMap} from "rhine-var"
import {ModelOrigin} from "@/api/service/sync/interface/models/model-origin.enum";
import {ModelFormat} from "@/api/service/sync/interface/models/model-format.enum";

export default interface RvModels {
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