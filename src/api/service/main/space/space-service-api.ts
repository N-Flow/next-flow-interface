import { StoredRhineVar } from 'rhine-var'

import RvStep from '../../sync/interface/step/rv-step.interface'

import Page from './dto/page/page'
import { PageMode } from './dto/page/page-mode.enum'
import { PageType } from './dto/page/page-type.enum'
import { ScreenSize } from './dto/screen/screen-size.enum'
import Screen from './dto/screen/screen.interface'

export type StepChangeSubscriber = (
  sid: string,
  step: StoredRhineVar<RvStep>,
  lastSid: string,
  lastStep: RvStep | undefined,
) => void

export default interface SpaceServiceApi {
  page: Page

  screen: Screen

  subscribeStepChange(subscriber: StepChangeSubscriber): void

  unsubscribeStepChange(subscriber: StepChangeSubscriber): void

  setScreenSize(size: ScreenSize): void


  isEditorPage(type?: PageType): boolean

  isBoxMode(mode?: PageMode): boolean

  isFullMode(mode?: PageMode): boolean
}
