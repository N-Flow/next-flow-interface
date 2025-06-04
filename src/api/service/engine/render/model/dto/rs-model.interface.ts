import { Node } from '@babylonjs/core'

import { RsModelStatus } from './rs-model-status.enum'

export default interface RsModel {
  mid: string

  progress: number
  status: RsModelStatus

  node?: Node
}
