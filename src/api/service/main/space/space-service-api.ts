import Page from "@/api/service/main/space/dto/page/page";
import Screen from "@/api/service/main/space/dto/screen/screen";
import {ScreenSize} from "@/api/service/main/space/dto/screen/screen-size";

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
