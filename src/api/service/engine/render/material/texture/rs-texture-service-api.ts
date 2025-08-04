import { DynamicTexture, Texture } from '@babylonjs/core'

import { TextureInfo } from '@/api/service/engine/render/material/dto/texture-info.interface'

export default interface RsTextureServiceApi {
  get(fid: string): TextureInfo | null

  getWhiteTexture(): DynamicTexture

  getBlackTexture(): DynamicTexture

  add(fid: string): Promise<TextureInfo | null>

  getTexture(fid: string, without: number): Promise<Texture | null>

  pushTexture(fid: string, texture: Texture, url: string): TextureInfo

  remove(fid: string): void
}
