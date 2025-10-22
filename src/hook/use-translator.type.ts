import { Translator } from '@/service/main/internationalization/internationalization-service-api'

export type UseTranslator = (namespace: string) => Translator
