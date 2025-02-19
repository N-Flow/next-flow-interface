
export default interface RvCamera {
  enable: boolean

  config: {
    easy: boolean
  }

  alpha: number
  beta: number
  radius: number

  target: {
    x: number
    y: number
    z: number
  }
}
