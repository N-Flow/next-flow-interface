import {V3} from "@/type/general/vector.type"
import RvCameraLocation from "@/api/service/sync/interface/step/environment/camera/location/rv-camera-location.interface"

export interface RvAwarenessUser {
  name: string,
  color: string,
  avatar: string,
  uuid: string,
}

export interface RvAwarenessClick {
  position: V3,
  time: number,
}


export default interface RvAwareness {
  clientId: string,
  timestamp: number,
  user: RvAwarenessUser,
  state: {
    targetStepId: string,
    meetingId: string,
    targetNodes: string[],
    camera: RvCameraLocation,
    cursor: V3 | null,
    drawers: string[],
    clicks: RvAwarenessClick[],
  }
}
