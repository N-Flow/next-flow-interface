import { ThemeBackground } from '@/service/main/theme/dto/theme-background.enum'

export default interface RvGlobal {
  information: {
    title: string
    description: string
    tags: string
  }
  ui: {
    theme: ThemeBackground
  }
  playing: {
    auto: boolean
    loop: boolean
    interval: number
  }
  support: {
    VR: boolean
    AR: boolean
    MR: boolean
    HP: boolean
  }
}
