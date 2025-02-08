import Page from "./interface/page/page";
import Screen from "./interface/screen/screen";
import {ScreenSize} from "./interface/screen/screen-size";

export type StepChangeSubscriber = (sid: string, step: any, lastSid: string, lastStep: any) => void

export default interface SpaceServiceApi {
  
  page: Page
  
  screen: Screen

  subscribeStepChange(subscriber: StepChangeSubscriber): void

  unsubscribeStepChange(subscriber: StepChangeSubscriber): void
  
  isBoxMode(): boolean
  
  isDarkTheme(): boolean

  setScreenSize(size: ScreenSize): void

}
