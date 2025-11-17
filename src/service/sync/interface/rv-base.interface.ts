import RvFile from './file/rv-file.interface'
import RvGlobal from './global/rv-global.interface'
import RvHistory from './history/RvHistory.interface'
import RvMeeting from './meeting/rv-meeting.interface'
import RvModel from './model/rv-model.interface'
import RvPlugin from './plugin/rv-plugin'
import RvResource from './resource/rv-resource.interface'
import RvSceneNode from './scene/rv-scene-node.interface'
import RvSeparate from './separate/rv-separate.interface'
import RvStep from './step/rv-step.interface'
import RvVersion from './version/rv-version.interface'

import type { RhineVarArray, RhineVarMap } from 'rhine-var'

export default interface RvBase {
  global: RvGlobal
  order: RhineVarArray<string>
  steps: RhineVarMap<RvStep>

  plugin: RvPlugin

  files: RhineVarMap<RvFile>
  resources: RhineVarMap<RvResource>

  scene: RhineVarMap<RvSceneNode>

  models: RhineVarMap<RvModel>
  separate: RvSeparate

  history: RvHistory

  meetings: RhineVarMap<RvMeeting>

  version: RvVersion
}
