import {Color3} from "@babylonjs/core"

export default interface GroundAnimationApi {

  play(data: any, duration?: number, quickMode?: boolean): void

  opacityRate(value: number, duration?: number, quickMode?: boolean): void

  diffuseColor(color: Color3 | string, duration?: number, quickMode?: boolean): void

  emissiveColor(color: Color3 | string, duration?: number, quickMode?: boolean): void

}