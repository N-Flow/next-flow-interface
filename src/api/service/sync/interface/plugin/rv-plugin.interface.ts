export default interface RvPlugin {
  id: string
  version: string | VersionPoint
  enable: {
    viewer: EnableLevel
    editor: EnableLevel
  }
}

export enum EnableLevel {
  NONE = 'NONE',
  INSTALL = 'INSTALL',
  ENABLE = 'ENABLE',
  OPEN = 'OPEN',
}

export enum VersionPoint {
  LATEST_STABLE = 'LATEST_STABLE',
  LATEST_NIGHTLY = 'LATEST_NIGHTLY',
  LATEST_CANARY = 'LATEST_CANARY',
}
