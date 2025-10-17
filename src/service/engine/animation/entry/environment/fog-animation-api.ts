import { Color3 } from '@babylonjs/core'

import RvEnvironment from '@/service/sync/interface/step/environment/rv-environment.interface'

export default interface FogAnimationApi {
  play(data: RvEnvironment['fog'], duration?: number, quickMode?: boolean): void

  enableAndDensity(enable: boolean, value: number, duration?: number, quickMode?: boolean): void

  color(color: Color3 | string, duration?: number, quickMode?: boolean): void
}
