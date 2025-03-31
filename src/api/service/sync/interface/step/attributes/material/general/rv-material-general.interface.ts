import {RvMaterialType} from "@/api/service/sync/interface/step/rv-material-type.enum";

export interface RvMaterialGeneral {
  isPickable: boolean
  visibility: number
  receiveShadows: boolean
  materialType: RvMaterialType
  isExtracted: boolean
}