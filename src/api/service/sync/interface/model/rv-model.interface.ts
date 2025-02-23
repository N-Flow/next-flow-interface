import {RhineVarMap} from "rhine-var"
import {RvModelOrigin} from "@/api/service/sync/interface/model/rv-model-origin.enum";
import {RvModelFormat} from "@/api/service/sync/interface/model/rv-model-format.enum";

export default interface RvModel {
  origin: RvModelOrigin
  name: string
  format: RvModelFormat
  icon: string
  group: string
  path: string
  file: string
  keys: string[]
  mid: string
  args: any
  fid: string
}