import { MessageType } from '@/api/service/main/message/dto/message-type.type'

import { Message } from './message.class'

export default interface MessageServiceApi {
  messages: Message[]

  info: (text: string, translateNamespace?: string, duration?: number) => void

  success: (text: string, translateNamespace?: string, duration?: number) => void

  warning: (text: string, translateNamespace?: string, duration?: number) => void

  error: (text: string, translateNamespace?: string, duration?: number) => void

  showWithTranslate: (
    text: string,
    type: MessageType,
    translateNamespace: string,
    duration: number,
  ) => void

  show: (text: string, type: MessageType, duration?: number) => void
}
