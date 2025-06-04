import { Color3 } from '@babylonjs/core'

export default interface FogAnimationApi {
  play(data: any, duration?: number, quickMode?: boolean): void

  enableAndDensity(enable: boolean, value: number, duration?: number, quickMode?: boolean): void

  color(color: Color3 | string, duration?: number, quickMode?: boolean): void
}
