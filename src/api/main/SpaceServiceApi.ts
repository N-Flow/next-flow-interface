import Page from "../../interface/core/page/page";
import Screen from "../../interface/core/screen/screen";
import {StepChangeListener} from "../../interface/core/page/step-change-listener";
import {ScreenSize} from "../../interface/core/screen/screen-size";


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
