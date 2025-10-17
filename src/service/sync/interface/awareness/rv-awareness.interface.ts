import RvCameraLocation from '@/service/sync/interface/step/environment/camera/location/rv-camera-location.interface'
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
  timestamp: number
}

export interface RvAwarenessWindow {
  innerWidth: number
  innerHeight: number
}

export default interface RvAwareness {
  clientId: number
  user: RvAwarenessUser
  device: RvAwarenessDevice
  sid: string
  meetingId: string
  selected: string[]
  camera: RvCameraLocation
  clicks: RvAwarenessClick[]
  window: RvAwarenessWindow
  cursor: V3
  openedDrawers: string[]
}
