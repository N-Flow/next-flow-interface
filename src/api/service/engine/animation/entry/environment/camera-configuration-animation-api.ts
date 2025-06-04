export default interface CameraConfigurationAnimationApi {
  play(data: any, duration?: number, quickMode?: boolean): void

  distanceMin(value: number, duration?: number, quickMode?: boolean): void

  distanceMax(value: number, duration?: number, quickMode?: boolean): void

  fov(value: number, duration?: number, quickMode?: boolean): void
}
