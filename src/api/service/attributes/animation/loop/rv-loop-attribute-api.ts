import RvLoop from "@/api/service/sync/interface/step/attributes/animation/loop/rv-loop.interface"

export default interface RvLoopAttributeApi {

  key: string

  defaultValue: RvLoop

  generate(): RvLoop

  ensure(nid: string): boolean

}