import {Engine, Scene} from "@babylonjs/core"

export default interface RsServiceApi {

  canvas: HTMLCanvasElement | undefined
  scene: Scene | undefined
  engine: Engine | undefined

  state: {
    rendering: boolean
  }

}
