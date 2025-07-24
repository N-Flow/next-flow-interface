import { V3 } from '@/type/general/vector.type'

export default interface RsClickApi {
  simplifyDoneList(): void

  show(position: V3, color: string, id: string, time: number): void
}
