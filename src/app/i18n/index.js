import { createI18n } from 'vue-i18n'
import { en } from '@/translations/en'

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  missingWarn: true,
  messages: {
    en
  }
})
