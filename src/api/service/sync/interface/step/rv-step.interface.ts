import type { RhineVarMap } from 'rhine-var';
import RvEnvironment from "@/api/service/sync/interface/step/environment/rv-environment.interface";
import RvConfiguration from "@/api/service/sync/interface/step/configuration/rv-configuration.interface";

export default interface RvStep {
  name: string
  sid: string

  attributes: RhineVarMap<any>

  configuration: RvConfiguration
  environment: RvEnvironment
}
