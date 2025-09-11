import { Color3 } from '@babylonjs/core'

import RvEnvironment from '@/api/service/sync/interface/step/environment/rv-environment.interface'

export default interface GroundAnimationApi {
  play(data: RvEnvironment['ground'], duration?: number, quickMode?: boolean): void

  opacityRate(value: number, duration?: number, quickMode?: boolean): void

  baseColor(color: Color3 | string, duration?: number, quickMode?: boolean): void

  enableOnViewerMode(value: boolean, duration: number, quickMode: boolean): void

  enableOnEditorMode(value: boolean, duration: number, quickMode: boolean): void
}
