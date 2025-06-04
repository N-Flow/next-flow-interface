export default interface Status {
  Authenticated: boolean
  DataSynchronized: boolean
  SyncInitialized: boolean
  RsInitialized: boolean
  AllInitialized: boolean
  PluginLoaded: boolean
  FileLoaded: boolean
  ModelLoaded: boolean
  Rendered: boolean
  Shown: boolean
}
