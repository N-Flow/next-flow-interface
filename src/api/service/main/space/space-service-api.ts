import Page from "./interface/page/page";
import Screen from "./interface/screen/screen";
import {StepChangeListener} from "./interface/page/step-change-listener";
import {ScreenSize} from "./interface/screen/screen-size";


export default class SpaceServiceApi {
  
  static page: Page
  
  static screen: Screen

  public static addStepChangeListener(listener: StepChangeListener): void {
  }
  
  public static removeStepChangeListener(listener: StepChangeListener): void {
  }
  
  public static isBoxMode(): boolean {
    return false
  }
  
  public static isDarkTheme(): boolean {
    return false
  }

}
