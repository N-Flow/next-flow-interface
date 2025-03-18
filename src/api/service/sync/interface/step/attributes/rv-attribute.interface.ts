import RvLocation from "@/api/service/sync/interface/step/attributes/location/rv-location.interface";
import RvMaterial from "@/api/service/sync/interface/step/attributes/material/rv-material.interface";

// TODO: 改名为 RvAttributes 相关文件名，及引用的地方一同修改  @YF
export default interface RvAttribute {
  location?: RvLocation
  material?: RvMaterial
}
