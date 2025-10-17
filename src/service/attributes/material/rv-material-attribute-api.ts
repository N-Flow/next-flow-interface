import { BaseTexture, NodeMaterial, PBRMaterial } from '@babylonjs/core'

import RvMaterial from '@/service/sync/interface/step/attributes/material/rv-material.interface'

import { RvMaterialNode } from '../../sync/interface/step/attributes/material/node/rv-material-node.interface'
import { RvMaterialPBR } from '../../sync/interface/step/attributes/material/pbr/rv-material-pbr.interface'
import { RvMaterialTexture } from '../../sync/interface/step/attributes/material/texture/rv-material-texture.interface'

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
