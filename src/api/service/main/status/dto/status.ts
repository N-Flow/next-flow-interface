export default interface Status {
  Authenticated: boolean
  DataSynchronized: boolean
  SyncInitialized: boolean
  RsInitialized: boolean
  AllInitialized: boolean
  PluginEnabled: boolean
  PluginPreLoaded: boolean
  FileLoaded: boolean
  ModelLoaded: boolean
  PluginPreRendered: boolean
  Rendered: boolean
  Shown: boolean
}
