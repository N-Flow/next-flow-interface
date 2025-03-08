
export default interface RsModelServiceApi {

  load(mid: string): Promise<void>

  loadAndInitialize(mid: string): Promise<void>

}
