import { V3, V4 } from "@/type/general/vector.type"
import NumberUtils from "./number-utils"
import { Quaternion, Vector3 } from "@babylonjs/core"

export default class VectorUtils {

  static xyToArray = (data: any, round = -1, defaultValue = [0, 0]) => {
    if (!data) {return defaultValue}
    if (round === -1) {
      return [data.x, data.y]
    } 
      return [NumberUtils.roundToX(data.x, round), NumberUtils.roundToX(data.y, round)]
    
  }

  static xyzToArray = (data: any, round = -1, defaultValue = [0, 0, 0]) => {
    if (!data) {return defaultValue}
    if (round === -1) {
      return [data.x, data.y, data.z]
    } 
      return [NumberUtils.roundToX(data.x, round), NumberUtils.roundToX(data.y, round), NumberUtils.roundToX(data.z, round)]
    
  }

  static xyzwToArray = (data: any, round = -1, defaultValue = [0, 0, 0, 0]) => {
    if (!data) {return defaultValue}
    if (round === -1) {
      return [data.x, data.y, data.z, data.w]
    } 
      return [NumberUtils.roundToX(data.x, round), NumberUtils.roundToX(data.y, round), NumberUtils.roundToX(data.z, round), NumberUtils.roundToX(data.w, round)]
    
  }


  static scaleV3(ratio: number, v: V3): V3 {
    return {x: v.x * ratio, y: v.y * ratio, z: v.z * ratio}
  }

  static radiansToDegrees(v: V3): V3 {
    return {x: v.x * 180 / Math.PI, y: v.y * 180 / Math.PI, z: v.z * 180 / Math.PI}
  }

  static degreeToRadians(v: V3): V3 {
    return {x: v.x * Math.PI / 180, y: v.y * Math.PI / 180, z: v.z * Math.PI / 180}
  }

  static radiansToQuaternion(v: V3): Quaternion {
    return Quaternion.RotationYawPitchRoll(v.y, v.x, v.z)
  }

  static degreesToQuaternion(v: V3): Quaternion {
    return Quaternion.RotationYawPitchRoll(v.y * Math.PI / 180, v.x * Math.PI / 180, v.z * Math.PI / 180)
  }

  static toVector3(v: V3): Vector3 {
    return new Vector3(v.x, v.y, v.z)
  }

  static fromVector3(v: Vector3): V3 {
    return {x: v.x, y: v.y, z: v.z}
  }

  static withRound(v: V3, n = 0): V3 {
    return {x: NumberUtils.roundToX(v.x, n), y: NumberUtils.roundToX(v.y, n), z: NumberUtils.roundToX(v.z, n)}
  }

  static isFiniteVector(v: V3) {
    return isFinite(v.x) && isFinite(v.y) && isFinite(v.z)
  }

  static noZero(v: V3) {
    return v.x !== 0 && v.y !== 0 && v.z !== 0
  }


  static scaleV4(ratio: number, v: V4) {
    return {x: v.x * ratio, y: v.y * ratio, z: v.z * ratio, w: v.w * ratio}
  }

  static toQuaternionVector(v: V4): Quaternion {
    return new Quaternion(v.x, v.y, v.z, v.w)
  }

  static toEulerRadians(v: V4): V3 {
    const q = VectorUtils.toQuaternionVector(v)
    return q.toEulerAngles()
  }

  static toEulerDegrees(v: V4): V3 {
    const q = VectorUtils.toQuaternionVector(v)
    return VectorUtils.radiansToDegrees(q.toEulerAngles())
  }

  private static isV4(v: V3 | V4): v is V4 {
    return 'w' in v
  }

  static toArray(v: V3 | V4): number[] {
    if (this.isV4(v)) {
      return [v.x, v.y, v.z, (v).w]
    } 
      return [v.x, v.y, v.z]
    
  }

  static fromQuaternion(q: Quaternion): V4 {
    return {x: q.x, y: q.y, z: q.z, w: q.w}
  }

  static toArrayWithRound4(v: V3 | V4, n = 0): number[] {
    if (this.isV4(v)) {
      return [NumberUtils.roundToX(v.x, n), NumberUtils.roundToX(v.y, n), NumberUtils.roundToX(v.z, n), NumberUtils.roundToX((v).w, n)]
    } 
      return [NumberUtils.roundToX(v.x, n), NumberUtils.roundToX(v.y, n), NumberUtils.roundToX(v.z, n)]
    
  }

}
