import { AnimationGroup } from "@babylonjs/core"
import { SupportAnimationTarget } from "../dto/support-animation-target.type"

export default interface EasyPropertyAnimationApi {

  animationMap: Map<string, {
    animationGroup?: AnimationGroup
    timeout?: ReturnType<typeof setTimeout>
  }>

  play(
    id: string,
    type: number,
    node: SupportAnimationTarget,
    keys: string[],
    to: any,
    duration?: number,
    quickMode?: boolean,
    from?: any,
    ease?: boolean,
  ): void

  playSplit(
    id: string,
    callback: () => void,
    duration?: number,
  ): void

  stop(id: string): void

}
