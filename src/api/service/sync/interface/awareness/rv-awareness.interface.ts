import RvCameraLocation from '@/api/service/sync/interface/step/environment/camera/location/rv-camera-location.interface'
import { V3 } from '@/type/general/vector.type'

export interface RvAwarenessUser {
  name: string
  color: string
  avatar: string
  uuid: string
}

export interface RvAwarenessDevice {
  platform: string
}

export interface RvAwarenessClick {
  position: V3
  time: number
}

export interface RvAwarenessState {
  timestamp: number
  sid: string
  mid: string
  selected: string[]
  camera: RvCameraLocation
  clicks: RvAwarenessClick[]
  window: {
    innerWidth: number
    innerHeight: number
  }
  cursor: V3
  openedDrawers: string[]
}

export default interface RvAwareness {
  clientId: number
  user: RvAwarenessUser
  device: RvAwarenessDevice
  state: RvAwarenessState
}
