import RvFile from '@/api/service/sync/interface/file/rv-file.interface'
import RvHistory from '@/api/service/sync/interface/history/RvHistory.interface'
import RvMeeting from '@/api/service/sync/interface/meeting/rv-meeting.interface'
import RvModel from '@/api/service/sync/interface/model/rv-model.interface'
import RvResource from '@/api/service/sync/interface/resource/rv-resource.interface'
import RvVersion from '@/api/service/sync/interface/version/rv-version.interface'

import RvGlobal from './global/rv-global.interface'
import RvSceneNode from './scene/rv-scene-node.interface'
import RvSeparate from './separate/rv-separate.interface'
import RvStep from './step/rv-step.interface'

import type { RhineVarArray, RhineVarMap } from 'rhine-var'

export default interface RvBase {
  global: RvGlobal
  order: RhineVarArray<string>
  steps: RhineVarMap<RvStep>

  files: RhineVarMap<RvFile>
  resources: RhineVarMap<RvResource>

  scene: RvSceneNode

  models: RhineVarMap<RvModel>
  separate: RvSeparate

  history: RvHistory

  meetings: RhineVarMap<RvMeeting>

  version: RvVersion
}
