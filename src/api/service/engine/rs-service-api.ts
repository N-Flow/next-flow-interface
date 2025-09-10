import { Engine, Scene, WebGPUEngine, WebXRDefaultExperience } from '@babylonjs/core'

export default interface RsServiceApi {
  canvas: HTMLCanvasElement | undefined
  scene: Scene | undefined
  engine: Engine | WebGPUEngine | undefined

  experience: WebXRDefaultExperience | null

  state: {
    rendering: boolean
  }
}
