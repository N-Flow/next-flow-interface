import { Locale } from '@/api/service/main/internationalization/dto/locale'
import { MessageTree } from '@/api/service/main/internationalization/internationalization-service-api'

export type MessageLoader = (locale: Locale) => Promise<MessageTree>
