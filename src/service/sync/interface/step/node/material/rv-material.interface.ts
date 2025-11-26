import { RvMaterialGeneral } from '@/service/sync/interface/step/node/material/general/rv-material-general.interface'
import { RvMaterialNode } from '@/service/sync/interface/step/node/material/node/rv-material-node.interface'
import { RvMaterialPBR } from '@/service/sync/interface/step/node/material/pbr/rv-material-pbr.interface'
import { RvPresetType } from '@/service/sync/interface/step/node/material/preset/rv-preset-type.enum'
import { RvMaterialTexture } from '@/service/sync/interface/step/node/material/texture/rv-material-texture.interface'

export default interface RvMaterial {
  general: RvMaterialGeneral
  preset: RvPresetType
  pbr?: RvMaterialPBR
  node?: RvMaterialNode
  texture: RvMaterialTexture
}
