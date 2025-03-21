import RvLocation from "@/api/service/sync/interface/step/attributes/location/rv-location.interface";
import RvMaterial from "@/api/service/sync/interface/step/attributes/material/rv-material.interface";
import RvLabel from "@/api/service/sync/interface/step/attributes/label/rv-label.interface";

export default interface RvAttributes {
  location?: RvLocation
  material?: RvMaterial
  label?: RvLabel
}
