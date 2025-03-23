import {AnimationGroup} from "@babylonjs/core/Animations/animationGroup";
import RvCameraLocation from "@/api/service/sync/interface/step/environment/camera/location/rv-camera-location.interface";
import {Snapshot} from "valtio/vanilla";
import RvAwareness from "@/api/service/sync/interface/awareness/rv-awareness.interface";
import {Animation} from "@babylonjs/core";

export default interface CameraLocationAnimationApi {

  cameraAnimation: AnimationGroup | null

  play(data: RvCameraLocation, duration: number, enableNear: boolean): void

  playEasy(data: RvCameraLocation, duration: number): void

  makeCameraAnimationsEase(data: RvCameraLocation, duration?: number): Animation[]

  goToAwarenessState: (state: RvAwareness | Snapshot<RvAwareness>) => void

}