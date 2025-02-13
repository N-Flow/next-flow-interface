import RvAudio from "@/api/service/sync/interface/step/configuration/audio-info/rv-audio-info.interface";

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
    darkTheme: boolean
    enableStepChangeButton: boolean
    enableTopbar: boolean
    hideStep: boolean
    importantStep: boolean
  }

  audio: RvAudio
  secondAudio: RvAudio
}
