
export default interface RvGlobal {
  information: {
    title: string,
    description: string,
    tags: string,
  },
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
