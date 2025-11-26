import { BaseTexture, NodeMaterial, PBRMaterial } from '@babylonjs/core'

import { RvMaterialNode } from '@/service/sync/interface/step/node/material/node/rv-material-node.interface'
import { RvMaterialPBR } from '@/service/sync/interface/step/node/material/pbr/rv-material-pbr.interface'
import RvMaterial from '@/service/sync/interface/step/node/material/rv-material.interface'
import { RvMaterialTexture } from '@/service/sync/interface/step/node/material/texture/rv-material-texture.interface'

export default interface RvMaterialAttributeApi {
  key: string

  defaultPBRValue: RvMaterialPBR

  defaultNodeValue: RvMaterialNode

  defaultTextureValue: RvMaterialTexture

  defaultValue: RvMaterial

  generateTexture(
    textureMap?: Map<string, BaseTexture>,
    material?: PBRMaterial | NodeMaterial,
  ): RvMaterialTexture

  generatePBR(material?: PBRMaterial): RvMaterialPBR

  generateNode(material?: NodeMaterial): RvMaterialNode

  generate(nid: string): RvMaterial

  ensure(nid: string): boolean
}
