import Page from "@/api/service/main/space/dto/page/page"
import Screen from "@/api/service/main/space/dto/screen/screen.interface"
import {ScreenSize} from "@/api/service/main/space/dto/screen/screen-size.enum"

export type StepChangeSubscriber = (sid: string, step: any, lastSid: string, lastStep: any) => void

export default interface SpaceServiceApi {
  
  page: Page
  
  screen: Screen

  subscribeStepChange(subscriber: StepChangeSubscriber): void

  unsubscribeStepChange(subscriber: StepChangeSubscriber): void
  
  isBoxMode(): boolean

  setScreenSize(size: ScreenSize): void

}
