import { TransformNode, Vector3 } from '@babylonjs/core'

import RvLoop from '@/api/service/sync/interface/step/attributes/animation/loop/rv-loop.interface'
import RvLocation from '@/api/service/sync/interface/step/attributes/location/rv-location.interface'


export default interface RsLoopAnimationManagerApi {

  state: {enableInEditorMode: boolean}

  restartAnimation(nid: string, resetLocation: boolean): void

  startAllLoopAnimations(): void

  startAnimationLoop(nid: string, node: TransformNode, data: RvLoop, locationData: RvLocation): void

  stopAllLoopAnimations(resetLocation: boolean): void

  stopAnimation(nid: string): void

  makeTripAnimation(dis: number, speed: number, start: number, name: string, axis: string, fr: number): void

  makeSpinAnimation(value: number, start: number, name: string, axis: string, fr: number): void

  makeQuaternionAnimation(value: number, start: Vector3, name: string, axis: 'x' | 'y' | 'z', fr: number): void
}