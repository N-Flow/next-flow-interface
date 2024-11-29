import Page from "./interface/page/page";
import Screen from "./interface/screen/screen";
import {StepChangeListener} from "./interface/page/step-change-listener";
import {ScreenSize} from "./interface/screen/screen-size";


export default class SpaceServiceApi {
  
  static page: Page
  
  static screen: Screen
  
  static addStepChangeListener(listener: StepChangeListener): void {
  }
  
  static removeStepChangeListener(listener: StepChangeListener): void {
  }
  
  static setScreenSize(size: ScreenSize): void {
  }
  
  static isBoxMode(): boolean {
    return false
  }
  
  static isDarkTheme(): boolean {
    return false
  }

}
