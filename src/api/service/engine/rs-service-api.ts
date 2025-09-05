import { Engine, Scene, WebXRDefaultExperience } from '@babylonjs/core'

export default interface RsServiceApi {
  canvas: HTMLCanvasElement | undefined
  scene: Scene | undefined
  engine: Engine | undefined

  experience: WebXRDefaultExperience | null

  state: {
    rendering: boolean
  }
}
