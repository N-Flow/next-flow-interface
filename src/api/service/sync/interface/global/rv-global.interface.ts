import {ThemeBackground} from "@/api/service/main/space/dto/theme/theme-background";

export default interface RvGlobal {
  information: {
    title: string,
    description: string,
    tags: string,
  },
  ui: {
    theme: ThemeBackground
  }
  playing: {
    auto: boolean,
    loop: boolean,
    interval: number,
  },
  support: {
    VR: boolean,
    AR: boolean,
    MR: boolean,
    HP: boolean,
  }
}
