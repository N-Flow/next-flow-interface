import { Quaternion, Vector3 } from '@babylonjs/core'

import { V2, V3, V4 } from '@/type/general/vector.type'

import NumberUtils from './number-utils'

export function xyToArray(
  data: V2 | null | undefined,
  round = -1,
  defaultValue: [number, number] = [0, 0],
): [number, number] {
  if (!data) {
    return defaultValue
  }
  if (round === -1) {
    return [data.x, data.y]
  }
  return [NumberUtils.roundToX(data.x, round), NumberUtils.roundToX(data.y, round)]
}

export function xyzToArray(
  data: V3 | null | undefined,
  round = -1,
  defaultValue: [number, number, number] = [0, 0, 0],
): [number, number, number] {
  if (!data) {
    return defaultValue
  }
  if (round === -1) {
    return [data.x, data.y, data.z]
  }
  return [
    NumberUtils.roundToX(data.x, round),
    NumberUtils.roundToX(data.y, round),
    NumberUtils.roundToX(data.z, round),
  ]
}

export function xyzwToArray(
  data: V4 | null | undefined,
  round = -1,
  defaultValue: [number, number, number, number] = [0, 0, 0, 0],
): [number, number, number, number] {
  if (!data) {
    return defaultValue
  }
  if (round === -1) {
    return [data.x, data.y, data.z, data.w]
  }
  return [
    NumberUtils.roundToX(data.x, round),
    NumberUtils.roundToX(data.y, round),
    NumberUtils.roundToX(data.z, round),
    NumberUtils.roundToX(data.w, round),
  ]
}

export function scaleV3(ratio: number, v: V3): V3 {
  return { x: v.x * ratio, y: v.y * ratio, z: v.z * ratio }
}

export function radiansToDegrees(v: V3): V3 {
  return { x: (v.x * 180) / Math.PI, y: (v.y * 180) / Math.PI, z: (v.z * 180) / Math.PI }
}

export function degreeToRadians(v: V3): V3 {
  return { x: (v.x * Math.PI) / 180, y: (v.y * Math.PI) / 180, z: (v.z * Math.PI) / 180 }
}

export function radiansToQuaternion(v: V3): Quaternion {
  return Quaternion.RotationYawPitchRoll(v.y, v.x, v.z)
}

export function degreesToQuaternion(v: V3): Quaternion {
  return Quaternion.RotationYawPitchRoll(
    (v.y * Math.PI) / 180,
    (v.x * Math.PI) / 180,
    (v.z * Math.PI) / 180,
  )
}

export function toVector3(v: V3): Vector3 {
  return new Vector3(v.x, v.y, v.z)
}

export function fromVector3(v: Vector3): V3 {
  return { x: v.x, y: v.y, z: v.z }
}

export function withRound(v: V3, n = 0): V3 {
  return {
    x: NumberUtils.roundToX(v.x, n),
    y: NumberUtils.roundToX(v.y, n),
    z: NumberUtils.roundToX(v.z, n),
  }
}

export function isFiniteVector(v: V3) {
  return isFinite(v.x) && isFinite(v.y) && isFinite(v.z)
}

export function noZero(v: V3) {
  return v.x !== 0 && v.y !== 0 && v.z !== 0
}

export function scaleV4(ratio: number, v: V4): V4 {
  return { x: v.x * ratio, y: v.y * ratio, z: v.z * ratio, w: v.w * ratio }
}

export function toQuaternionVector(v: V4): Quaternion {
  return new Quaternion(v.x, v.y, v.z, v.w)
}

export function toEulerRadians(v: V4): V3 {
  const q = toQuaternionVector(v)
  return q.toEulerAngles()
}

export function toEulerDegrees(v: V4): V3 {
  const q = toQuaternionVector(v)
  return radiansToDegrees(q.toEulerAngles())
}

function isV4(v: V3 | V4): v is V4 {
  return 'w' in v
}

export function toArray(v: V3 | V4): number[] {
  if (isV4(v)) {
    return [v.x, v.y, v.z, v.w]
  }
  return [v.x, v.y, v.z]
}

export function fromQuaternion(q: Quaternion): V4 {
  return { x: q.x, y: q.y, z: q.z, w: q.w }
}

export function toArrayWithRound4(v: V3 | V4, n = 0): number[] {
  if (isV4(v)) {
    return [
      NumberUtils.roundToX(v.x, n),
      NumberUtils.roundToX(v.y, n),
      NumberUtils.roundToX(v.z, n),
      NumberUtils.roundToX(v.w, n),
    ]
  }
  return [NumberUtils.roundToX(v.x, n), NumberUtils.roundToX(v.y, n), NumberUtils.roundToX(v.z, n)]
}

// Create a namespace object for backward compatibility
const VectorUtils = {
  xyToArray,
  xyzToArray,
  xyzwToArray,
  scaleV3,
  radiansToDegrees,
  degreeToRadians,
  radiansToQuaternion,
  degreesToQuaternion,
  toVector3,
  fromVector3,
  withRound,
  isFiniteVector,
  noZero,
  scaleV4,
  toQuaternionVector,
  toEulerRadians,
  toEulerDegrees,
  toArray,
  fromQuaternion,
  toArrayWithRound4,
}

export default VectorUtils
