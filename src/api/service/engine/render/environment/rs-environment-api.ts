import {
  AbstractMesh,
  ArcRotateCamera,
  Color3,
  CubeTexture,
  Light,
  ShadowGenerator,
  TransformNode,
  Vector3,
} from '@babylonjs/core'

import { V3 } from '@/type/general/vector.type'

export default interface RsEnvironmentApi {
  mainCamera: ArcRotateCamera
  rightCamera: ArcRotateCamera
  backCamera: ArcRotateCamera
  leftCamera: ArcRotateCamera

  lights: Light[]
  shadow: ShadowGenerator

  environmentTexture: CubeTexture

  STANDARD_MODE: boolean

  adjustCamera(models: AbstractMesh[] | AbstractMesh): void

  getCameraInfo(): {
    target: { x: number; y: number; z: number }
    alpha: number
    beta: number
    radius: number
  }

  addShadows(meshes: AbstractMesh[] | AbstractMesh): void

  initLight(): void

  initFourCamera(camerasNode: TransformNode): void

  setActiveCamera(isFour: boolean): void

  normalizeCameraAngle(): void

  setCameraDistance(distance: number): void

  setBackgroundColor(color: Color3): void

  getPositionToCameraDistance(p: V3 | Vector3): number
}
