import {Color3, Color4} from "@babylonjs/core";


export default interface SkyboxAnimationApi {

  play(data: any, duration?: number, quickMode?: boolean): void

  background(color: Color4 | Color3 | string, duration?: number, quickMode?: boolean): void

}