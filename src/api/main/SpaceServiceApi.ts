import Page from "../../interface/core/page/Page";
import Screen from "../../interface/core/screen/Screen";
import {StepChangeListener} from "../../interface/core/page/StepChangeListener";
import {ScreenSize} from "../../interface/core/screen/ScreenSize";


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
