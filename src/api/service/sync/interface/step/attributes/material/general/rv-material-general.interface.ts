import {RvMaterialType} from "@/api/service/sync/interface/step/rv-material-type.enum";

export interface RvMaterialGeneral {
  type: RvMaterialType
  isPickable: boolean
  visibility: number
  receiveShadows: boolean
  isExtracted: boolean
}