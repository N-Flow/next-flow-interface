import { ThemeBackground } from '@/service/main/theme/dto/theme-background.enum'
import RvAudio from '@/service/sync/interface/step/configuration/audio-info/rv-audio.interface'

export default interface RvConfiguration {
  information: {
    collapseDescription: boolean
    description: string
    favorite: boolean
    group: string
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
    theme: ThemeBackground
    enableStepChangeButton: boolean
    enableTopbar: boolean
    hideStep: boolean
    importantStep: boolean
  }
  audio: RvAudio
  secondAudio: RvAudio
}
