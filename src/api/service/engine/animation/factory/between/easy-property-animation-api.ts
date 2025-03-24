import { SupportAnimationTarget } from "../dto/support-animation-target.type"

export default interface EasyPropertyAnimationApi {

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

  stop(id: string): void

  getLastPlayTime(id: string): number

  playSplit(
    callback: () => void,
    duration?: number,
  ): void

}
