export default interface RvPlugin {
  id: string
  version: string | VersionPoint
  default: {
    viewer: PluginDefaultLevel
    editor: PluginDefaultLevel
  }
}

export enum PluginDefaultLevel {
  NONE = 'NONE',
  ADD = 'ADD',
  ENABLE = 'ENABLE',
  OPEN = 'OPEN',
}

export enum VersionPoint {
  LATEST_STABLE = 'LATEST_STABLE',
  LATEST_NIGHTLY = 'LATEST_NIGHTLY',
  LATEST_CANARY = 'LATEST_CANARY',
}
