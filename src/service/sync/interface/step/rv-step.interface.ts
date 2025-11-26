import RvConfiguration from '@/service/sync/interface/step/configuration/rv-configuration.interface'
import RvEnvironment from '@/service/sync/interface/step/environment/rv-environment.interface'
import RvNode from '@/service/sync/interface/step/node/rv-node.interface'

import type { RhineVarMap } from 'rhine-var'

export default interface RvStep {
  name: string
  sid: string

  nodes: RhineVarMap<RvNode>

  configuration: RvConfiguration
  environment: RvEnvironment
}
