export default interface RvPlugin {
  id: string
  version: string | VersionPoint
  default: {
    viewer: DefaultLevel
    editor: DefaultLevel
  }
}

export enum DefaultLevel {
  ADD = 'ADD',
  ENABLE = 'ENABLE',
  OPEN = 'OPEN',
}

export enum VersionPoint {
  LATEST_STABLE = 'LATEST_STABLE',
  LATEST_CANARY = 'LATEST_CANARY',
}
