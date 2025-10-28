import { RvMaterialType } from './rv-material-type.enum'

export enum TransparencyMode {
  OPAQUE = 'OPAQUE',
  ALPHA_TEST = 'ALPHA_TEST',
  ALPHA_BLEND = 'ALPHA_BLEND',
  ALPHA_TEST_AND_BLEND = 'ALPHA_TEST_AND_BLEND',
}

export interface RvMaterialGeneral {
  type: RvMaterialType
  isExtracted: boolean
  transparencyMode: TransparencyMode
  needDepthPrePass: boolean
}
