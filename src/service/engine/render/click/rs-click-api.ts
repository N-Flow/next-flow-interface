import { V3 } from '@/type/general/vector.type'

export default interface RsClickApi {
  simplifyDoneList(delay: number): void

  show(position: V3, color: string, timestamp: number, duration?: number, id?: string): void
}
