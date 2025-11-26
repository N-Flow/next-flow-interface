import RvAttributes from '@/service/sync/interface/step/attributes/rv-attributes.interface'
import RvConfiguration from '@/service/sync/interface/step/configuration/rv-configuration.interface'
import RvEnvironment from '@/service/sync/interface/step/environment/rv-environment.interface'

import type { RhineVarMap } from 'rhine-var'

export default interface RvStep {
  name: string
  sid: string

  nodes: RhineVarMap<RvAttributes>

  configuration: RvConfiguration
  environment: RvEnvironment
}
