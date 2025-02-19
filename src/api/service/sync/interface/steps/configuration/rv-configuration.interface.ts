import RvAudio from "@/api/service/sync/interface/steps/configuration/audio-info/rv-audio.interface";
import {ThemeBackground} from "@/api/service/main/space/interface/theme/theme-background";

export default interface RvConfiguration {
  description: {
    collapseDefault: boolean
    enable: boolean
    text: string
  }
  interval: {
    enable: boolean
    enter: number
    exit: number
  }
  jump: {
    delay: number
    onlyOnce: boolean
    target: string
  }
  ui: {
    darkTheme: ThemeBackground
    enableStepChangeButton: boolean
    enableTopbar: boolean
    hideStep: boolean
    importantStep: boolean
  }
  audio: RvAudio
  secondAudio: RvAudio
}
