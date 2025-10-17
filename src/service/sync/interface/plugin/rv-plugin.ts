import RvPluginConfig from './rv-plugin-config.interface'
import RvPluginDebug from './rv-plugin-debug'

import type { RhineVarMap } from 'rhine-var'

export default interface RvPlugin {
  config: RhineVarMap<RvPluginConfig>
  debug: RhineVarMap<RvPluginDebug>
  order: string[]
}
