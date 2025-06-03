import {RvMaterialType} from "@/api/service/sync/interface/step/attributes/material/general/rv-material-type.enum"

export interface RvMaterialGeneral {
  type: RvMaterialType
  isPickable: boolean
  visibility: number
  receiveShadows: boolean
  isExtracted: boolean
}