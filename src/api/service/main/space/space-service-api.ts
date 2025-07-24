import { StoredRhineVar } from 'rhine-var'

import RvStep from '../../sync/interface/step/rv-step.interface'

import Page from './dto/page/page'
import { ScreenSize } from './dto/screen/screen-size.enum'
import Screen from './dto/screen/screen.interface'

export type StepChangeSubscriber = (
  sid: string,
  step: StoredRhineVar<RvStep>,
  lastSid: string,
  lastStep: unknown,
) => void

export default interface SpaceServiceApi {
  page: Page

  screen: Screen

  subscribeStepChange(subscriber: StepChangeSubscriber): void

  unsubscribeStepChange(subscriber: StepChangeSubscriber): void

  isBoxMode(): boolean

  setScreenSize(size: ScreenSize): void
}
