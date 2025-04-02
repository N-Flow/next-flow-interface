import { Node } from "@babylonjs/core"

export default interface SceneServiceApi {

  dragState: {
    nid: string
    x: number
    y: number
    offsetX: number
    offsetY: number
  }

}