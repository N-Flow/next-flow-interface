import { RvMaterialGeneral } from '@/service/sync/interface/step/attributes/material/general/rv-material-general.interface'
import { RvMaterialNode } from '@/service/sync/interface/step/attributes/material/node/rv-material-node.interface'
import { RvMaterialPBR } from '@/service/sync/interface/step/attributes/material/pbr/rv-material-pbr.interface'
import { RvMaterialTexture } from '@/service/sync/interface/step/attributes/material/texture/rv-material-texture.interface'

import { RvPresetType } from './preset/rv-preset-type.enum'

export default interface RvMaterial {
  general: RvMaterialGeneral
  preset: RvPresetType
  pbr?: RvMaterialPBR
  node?: RvMaterialNode
  texture: RvMaterialTexture
}
