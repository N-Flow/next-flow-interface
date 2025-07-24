import { Mesh, PBRMaterial } from '@babylonjs/core'

export default interface RsTransformGroundApi {
  m1: PBRMaterial

  m10: PBRMaterial

  g1: Mesh | undefined

  g10: Mesh | undefined

  state: {
    opacityRate: number
    enableOnViewerMode: boolean
    enableOnEditorMode: boolean
  }

  freshUsageInfo(): void

  initMaterial(): void

  createGround(): void

  hideGround(): void

  showGround(): void

  freshGround(): void
}
