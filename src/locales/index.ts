import { createI18n } from 'vue-i18n'
import zh_CN from './language/zh_CN'
import en_US from './language/en_US'
import zh_TW from './language/zh_TW'

export const LanguageMap = {
  TW: 'zh_TW',
  CN: 'zh_CN',
  EN: 'en_US',
}

export const defaultLang = localStorage.getItem('language') || LanguageMap.TW

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: defaultLang,
  fallbackLocale: defaultLang,
  messages: {
    zh_CN,
    zh_TW,
    en_US,
  },
})

export default i18n
