import {RvModelOrigin} from "@/api/service/sync/interface/model/rv-model-origin.enum";
import {RvModelFormat} from "@/api/service/sync/interface/model/rv-model-format.enum";

export default interface RvModel {
  mid: string
  name: string
  origin: RvModelOrigin
  format: RvModelFormat
  fid: string
  config?: any
}
