import { Locale } from '@/service/main/internationalization/dto/locale'
import { MessageTree } from '@/service/main/internationalization/internationalization-service-api'

export type MessageLoader = (locale: Locale) => Promise<MessageTree>
