import { RvMaterialType } from '@/service/sync/interface/step/attributes/material/general/rv-material-type.enum'

export interface RvMaterialGeneral {
  type: RvMaterialType
  isExtracted: boolean
}
