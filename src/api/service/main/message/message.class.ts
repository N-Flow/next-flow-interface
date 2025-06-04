import { MessageType } from "@/api/service/main/message/dto/message-type.type"

export class Message {
  show = true
  height = 20
  opacity = 0

  constructor(
    public text: string,
    public type: MessageType,
    public duration: number,
    public id: number,
  ) {
  }
}
