import {RvMaterialGeneral} from "@/api/service/sync/interface/step/attributes/material/general/rv-material-general.interface";
import {RvMaterialTexture} from "@/api/service/sync/interface/step/attributes/material/texture/rv-material-texture.interface";
import {RvMaterialPBR} from "@/api/service/sync/interface/step/attributes/material/pbr/rv-material-pbr.interface";
import {RvMaterialNode} from "@/api/service/sync/interface/step/attributes/material/node/rv-material-node.interface";

export default interface RvMaterial {
  general: RvMaterialGeneral
  texture: RvMaterialTexture
  pbr?: RvMaterialPBR
  node?: RvMaterialNode
}
