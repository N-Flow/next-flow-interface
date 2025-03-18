import {V3, V4} from "@/type/general/vector.type";

export default interface RvLocation {

  position: V3
  rotation?: V3
  nearMode: boolean,
  scale: V3
  rotationQuaternion?: V4

}
