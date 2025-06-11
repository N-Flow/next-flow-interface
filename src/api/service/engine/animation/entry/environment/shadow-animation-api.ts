export default interface ShadowAnimationApi {
  play(
    data: {
      enable?: boolean
      darkness?: number
      blurOffset?: number
      blurScale?: number
      onlyOnGround?: boolean
      normalBias?: number
    },
    duration?: number,
    quickMode?: boolean,
  ): void

  enable(value: boolean, duration?: number, quickMode?: boolean): void

  darkness(value: number, duration?: number, quickMode?: boolean): void

  blurOffset(value: number, duration?: number, quickMode?: boolean): void

  blurScale(value: number, duration?: number, quickMode?: boolean): void

  onlyOnGround(value: boolean, duration?: number, quickMode?: boolean): void

  normalBias(value: number, duration?: number, quickMode?: boolean): void
}
